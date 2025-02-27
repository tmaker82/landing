/* eslint-disable @next/next/no-img-element */
'use client';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dialog } from 'primereact/dialog';
import { FileUpload } from 'primereact/fileupload';
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';
import { Rating } from 'primereact/rating';
import { Toast } from 'primereact/toast';
import { Toolbar } from 'primereact/toolbar';
import { classNames } from 'primereact/utils';
import React, { useEffect, useRef, useState } from 'react';
import { Demo } from '@/types';
import {Dropdown} from "primereact/dropdown";

interface InputValue {
    name: string;
    code: string;
}

let dropdownValues: InputValue[] = [];

/* @todo Used 'as any' for types here. Will fix in next version due to onSelectionChange event type issue. */
const Contacts = () => {
    let emptyProduct: Demo.Contact = {
        id: '',
        name: '',
        photo: '',
        description: '',
        category: '',
        price: 0,
        quantity: 0,
        rating: 0,
        inventoryStatus: 'INSTOCK'
    };

    const [contacts, setContacts] = useState(null);
    const [productsCategory, setContactsCategory] = useState(null);
    const [productDialog, setProductDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [Contact, setProduct] = useState<Demo.Contact>(emptyProduct);
    const [selectedContacts, setSelectedContacts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState('');
    const toast = useRef<Toast>(null);
    const dt = useRef<DataTable<any>>(null);
    const [dropdownValue, setDropdownValue] = useState(null);
    const [dropdownValues, setDropdownValues] = useState(null);

    useEffect(() => {
        fetch('http://localhost:4000/api/contacts')
            .then((res) => res.json())
            .then((result) => setContacts(result.data));
    }, []);


    const formatCurrency = (value: number) => {
        return value.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });
    };

    const openNew = () => {
        setProduct(emptyProduct);
        setSubmitted(false);
        setProductDialog(true);
    };

    const hideDialog = () => {
        setSubmitted(false);
        setProductDialog(false);
    };

    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    };

    const hideDeleteProductsDialog = () => {
        setDeleteProductsDialog(false);
    };

    const saveProduct = () => {
        setSubmitted(true);

        if (Contact.name.trim()) {
            let _contacts = [...(contacts as any)];
            let _product = { ...Contact };
            if (Contact.id) {
                const index = findIndexById(Contact.id);
                const id = Contact.id;
                /*const name = Contact.name;
                const description = Contact.description;*/
                let data = {
                    name: Contact.name,
                    description: Contact.description
                }
                if (Contact.name && Contact.description) {
                    fetch(`http://localhost:4000/api/updateproductbyid/` + id, {
                        method: "POST",
                        body: JSON.stringify({
                           data
                        })
                    })
                        .then(response => response.json())
                        /*.then(data => {
                            //setUsers([...users, data])
                            //setNewName("")
                            //setNewEmail("")
                            //setNewWebsite("")
                            /!*AppToaster.show({
                                message: "User added successfully",
                                intent: "success",
                                timeout: 3000,
                            })*!/
                        })*/
                }

                _contacts[index] = _product;
                toast.current?.show({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Contact Updated',
                    life: 3000
                });

            } else {
                _product.id = createId();
                _product.photo = 'Contact-placeholder.svg';
                _contacts.push(_product);
                toast.current?.show({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Contact Created',
                    life: 3000
                });
            }

            setContacts(_contacts as any);
            setProductDialog(false);
            setProduct(emptyProduct);


        }
    };

    const editProduct = (Contact: Demo.Contact) => {
        setProduct({ ...Contact });
        setProductDialog(true);
    };

    const confirmDeleteProduct = (Contact: Demo.Contact) => {
        setProduct(Contact);
        setDeleteProductDialog(true);
    };

    const deleteProduct = () => {
        console.log(Contact.id)

        if (Contact.id) {
            fetch("http://localhost:4000/api/deleteproductbyid/" + Contact.id, {
                method: "POST",
            })
            .then(response => response.json())
                .then(() => {
                })
        }
        let _contacts = (contacts as any)?.filter((val: any) => val.id !== Contact.id);
        setContacts(_contacts);
        setDeleteProductDialog(false);
        setProduct(emptyProduct);
        toast.current?.show({
            severity: 'success',
            summary: 'Successful',
            detail: 'Contact Deleted',
            life: 3000
        });





    };

    const findIndexById = (id: string) => {
        let index = -1;
        for (let i = 0; i < (contacts as any)?.length; i++) {
            if ((contacts as any)[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    };

    const createId = () => {
        let id = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    };

    const exportCSV = () => {
        dt.current?.exportCSV();
    };

    const confirmDeleteSelected = () => {
        setDeleteProductsDialog(true);
    };

    const deleteSelectedProducts = () => {
        let _contacts = (contacts as any)?.filter((val: any) => !(selectedContacts as any)?.includes(val));
        setContacts(_contacts);
        setDeleteProductsDialog(false);
        setSelectedContacts(null);
        toast.current?.show({
            severity: 'success',
            summary: 'Successful',
            detail: 'contacts Deleted',
            life: 3000
        });
    };

    const onCategoryChange = (e: RadioButtonChangeEvent) => {
        let _product = { ...Contact };
        _product['category'] = e.value;
        setProduct(_product);
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, name: string) => {
        const val = (e.target && e.target.value) || '';
        let _product = { ...Contact };
        _product[`${name}`] = val;

        setProduct(_product);
    };

    const onInputNumberChange = (e: InputNumberValueChangeEvent, name: string) => {
        const val = e.value || 0;
        let _product = { ...Contact };
        _product[`${name}`] = val;

        setProduct(_product);
    };

    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <div className="my-2">
                    <Button label="Добавить" icon="pi pi-plus" severity="success" className=" mr-2" onClick={openNew} />
                    <Button label="Удалить" icon="pi pi-trash" severity="danger" onClick={confirmDeleteSelected} disabled={!selectedContacts || !(selectedContacts as any).length} />
                </div>
            </React.Fragment>
        );
    };

    const rightToolbarTemplate = () => {
        return (
            <React.Fragment>
                <FileUpload mode="basic" accept="image/*" maxFileSize={1000000} chooseLabel="Import" className="mr-2 inline-block" />
                <Button label="Export" icon="pi pi-upload" severity="help" onClick={exportCSV} />
            </React.Fragment>
        );
    };

/*    const codeBodyTemplate = (rowData: Demo.Contact) => {
        return (
            <>
                <span className="p-column-title">Code</span>
                {rowData.code}
            </>
        );
    };*/

    const nameBodyTemplate = (rowData: Demo.Contact) => {
        return (
            <>
                <span className="p-column-title">Name</span>
                {rowData.lastname} {rowData.firstname} {rowData.secondname}
            </>
        );
    };

    const imageBodyTemplate = (rowData: Demo.Contact) => {
        return (
            <>
                <span className="p-column-title">photo</span>
                <img src={`${rowData.photo}`} alt={rowData.photo} className="shadow-2" width="100" />
            </>
        );
    };

    const priceBodyTemplate = (rowData: Demo.Contact) => {
        return (
            <>
                <span className="p-column-title">Price</span>
                {/*{formatCurrency(rowData.price as number)}*/}
                {rowData.price}
            </>
        );
    };

    const categoryBodyTemplate = (rowData: Demo.Contact) => {
        return (
            <>
                <span className="p-column-title">Category</span>
                {rowData.category}
            </>
        );
    };

    const ratingBodyTemplate = (rowData: Demo.Contact) => {
        return (
            <>
                <span className="p-column-title">Reviews</span>
                <Rating value={rowData.rating} readOnly cancel={false} />
            </>
        );
    };

    const statusBodyTemplate = (rowData: Demo.Contact) => {
        return (
            <>
                <span className="p-column-title">Status</span>
                <span className={`Contact-badge status-${rowData.status?.toLowerCase()}`}>{rowData.status}</span>
            </>
        );
    };

    const actionBodyTemplate = (rowData: Demo.Contact) => {
        return (
            <>
                <Button icon="pi pi-pencil" rounded severity="success" className="mr-2" onClick={() => editProduct(rowData)} />
                <Button icon="pi pi-trash" rounded severity="warning" onClick={() => confirmDeleteProduct(rowData)} />
            </>
        );
    };

    const header = (
        <div className="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
            <h5 className="m-0">Список контактов</h5>
            <span className="block mt-2 md:mt-0 p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.currentTarget.value)} placeholder="Поиск..." />
            </span>
        </div>
    );

    const productDialogFooter = (
        <>
            <Button label="Отменить" icon="pi pi-times" text onClick={hideDialog} />
            <Button label="Сохранить" icon="pi pi-check" text onClick={saveProduct} />
        </>
    );
    const deleteProductDialogFooter = (
        <>
            <Button label="Нет" icon="pi pi-times" text onClick={hideDeleteProductDialog} />
            <Button label="Да" icon="pi pi-check" text onClick={deleteProduct} />
        </>
    );
    const deleteProductsDialogFooter = (
        <>
            <Button label="Нет" icon="pi pi-times" text onClick={hideDeleteProductsDialog} />
            <Button label="Да" icon="pi pi-check" text onClick={deleteSelectedProducts} />
        </>
    );

    return (
        <div className="grid crud-demo">
            <div className="col-12">
                <div className="card">
                    <Toast ref={toast} />
                    <Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>

                    <DataTable
                        ref={dt}
                        value={contacts}
                        selection={selectedContacts}
                        onSelectionChange={(e) => setSelectedContacts(e.value as any)}
                        dataKey="id"
                        paginator
                        rows={10}
                        rowsPerPageOptions={[5, 10, 25, 50, 100]}
                        className="datatable-responsive"
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Записи с {first} по {last} из {totalRecords} контактов"
                        globalFilter={globalFilter}
                        emptyMessage="No contacts found."
                        header={header}
                        responsiveLayout="scroll"
                    >
                        <Column selectionMode="multiple" headerStyle={{ width: '4rem' }}></Column>
{/*
                        <Column field="code" header="Code" sortable body={codeBodyTemplate} headerStyle={{ minWidth: '15rem' }}></Column>
*/}
                        <Column field="name" header="Фамилия" sortable body={nameBodyTemplate} headerStyle={{ minWidth: '15rem' }}></Column>
                        <Column header="Изображение" body={imageBodyTemplate}></Column>
                        <Column field="birthdate" header="Дата рождения"  sortable></Column>
                        {/*<Column field="category" header="Категория" sortable body={categoryBodyTemplate} headerStyle={{ minWidth: '10rem' }}></Column>*/}
                        <Column field="email" header="email" sortable></Column>
                        {/*<Column field="status" header="Статус" body={statusBodyTemplate} sortable headerStyle={{ minWidth: '10rem' }}></Column>*/}
                        <Column body={actionBodyTemplate} headerStyle={{ minWidth: '10rem' }}></Column>
                    </DataTable>

                    <Dialog visible={productDialog} style={{ width: '450px' }} header="Карточка контакта" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
                        {Contact.photo && <img src={`${Contact.photo}`} alt={Contact.photo} width="150" className="mt-0 mx-auto mb-5 block shadow-2" />}
                        <div className="field">
                            <label htmlFor="name">Фамилия</label>
                            <InputText
                                id="lastname"
                                value={Contact.lastname}
                                onChange={(e) => onInputChange(e, 'lastname')}
                                required
                                autoFocus
                                className={classNames({
                                    'p-invalid': submitted && !Contact.lastname
                                })}
                            />
                            {submitted && !Contact.lastname && <small className="p-invalid">Name is required.</small>}
                        </div>
                        <div className="field">
                            <label htmlFor="firstname">Имя</label>
                            <InputText
                                id="firstname"
                                value={Contact.firstname}
                                onChange={(e) => onInputChange(e, 'firstname')}
                                required
                                autoFocus
                                className={classNames({
                                    'p-invalid': submitted && !Contact.firstname
                                })}
                            />
                            {submitted && !Contact.firstname && <small className="p-invalid">Name is required.</small>}
                        </div>
                        <div className="field">
                            <label htmlFor="secondname">Отчество</label>
                            <InputText
                                id="secondname"
                                value={Contact.secondname}
                                onChange={(e) => onInputChange(e, 'lastname')}
                                required
                                autoFocus
                                className={classNames({
                                    'p-invalid': submitted && !Contact.secondname
                                })}
                            />
                            {submitted && !Contact.secondname && <small className="p-invalid">Name is required.</small>}
                        </div>
                        <div className="field">
                            <label htmlFor="email">email</label>
                            <InputText
                                id="email"
                                value={Contact.email}
                                onChange={(e) => onInputChange(e, 'email')}
                                required
                                autoFocus
                                className={classNames({
                                    'p-invalid': submitted && !Contact.email
                                })}
                            />
                            {submitted && !Contact.email && <small className="p-invalid">email is required.</small>}
                        </div>
                        <div className="field">
                            <label htmlFor="birthdate">email</label>
                            <InputText
                                id="birthdate"
                                value={Contact.birthdate}
                                onChange={(e) => onInputChange(e, 'birthdate')}
                                required
                                autoFocus
                                className={classNames({
                                    'p-invalid': submitted && !Contact.birthdate
                                })}
                            />
                            {submitted && !Contact.birthdate && <small className="p-invalid">birthdate is required.</small>}
                        </div>
                        <div className="field">
                            <label htmlFor="mobilephone">mobilephone</label>
                            <InputText
                                id="birthdate"
                                value={Contact.mobilephone}
                                onChange={(e) => onInputChange(e, 'mobilephone')}
                                required
                                autoFocus
                                className={classNames({
                                    'p-invalid': submitted && !Contact.mobilephone
                                })}
                            />
                            {submitted && !Contact.mobilephone && <small className="p-invalid">mobilephone is required.</small>}
                        </div>
                        <div className="field">
                            <label htmlFor="manager">manager</label>
                            <InputText
                                id="birthdate"
                                value={Contact.manager}
                                onChange={(e) => onInputChange(e, 'manager')}
                                required
                                autoFocus
                                className={classNames({
                                    'p-invalid': submitted && !Contact.manager
                                })}
                            />
                            {submitted && !Contact.manager && <small className="p-invalid">manager is required.</small>}
                        </div>
                    </Dialog>

                    <Dialog visible={deleteProductDialog} style={{ width: '450px' }} header="Подтвердите ваши действия" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                        <div className="flex align-items-center justify-content-center">
                            <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                            {Contact && (
                                <span>
                                    Вы действительно хотите удалить <b>{Contact.name}</b>?
                                </span>
                            )}
                        </div>
                    </Dialog>

                    <Dialog visible={deleteProductsDialog} style={{ width: '450px' }} header="Подтвердите ваши действия" modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}>
                        <div className="flex align-items-center justify-content-center">
                            <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                            {Contact && <span>Вы действительно хотите удалить выбранные товары?</span>}
                        </div>
                    </Dialog>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
