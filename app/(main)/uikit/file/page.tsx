'use client';

import React, { useRef } from 'react';
import { FileUpload } from 'primereact/fileupload';
import { Toast } from 'primereact/toast';

const FileDemo = () => {
    const toast = useRef<Toast | null>(null);

    const onUpload = () => {
        const formdata = new FormData();
        let fileInput;
        formdata.append("file", fileInput.files[0], "/Z:/NextCloud/Заметки/contacts_small — копия.txt");

        const requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow"
        };

        fetch("localhost:4000/api/upload", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));

        toast.current?.show({
            severity: 'info',
            summary: 'Success',
            detail: 'File Uploaded',
            life: 3000
        });
    };

    return (
        <div className="grid">
            <Toast ref={toast}></Toast>
            <div className="col-12">
                <div className="card">
                    <h5>Advanced</h5>
                    <FileUpload name="file[]" url="http://localhost:4000/api/upload" onUpload={onUpload} accept="csv/*" maxFileSize={1000000} />

                    <h5>Basic</h5>
                    <FileUpload mode="basic" name="file[]" url="http://localhost:4000/api/upload" accept="csv/*" maxFileSize={1000000} onUpload={onUpload}
                     />
                </div>
            </div>
        </div>
    );
};

export default FileDemo;
