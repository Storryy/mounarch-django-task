document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');
    
    const fileSelect = document.getElementById('file');
    const viewFileBtn = document.getElementById('view-file-btn');
    const modal = document.getElementById('file-not-found-modal');
    const closeModal = document.getElementById('close-modal');
    const cancelDownload = document.getElementById('cancel-download');
    const downloadFromDrive = document.getElementById('download-from-drive');
    let currentSelectedFile = '';
    
    console.log('fileSelect:', fileSelect);
    console.log('viewFileBtn:', viewFileBtn);
    
    if (fileSelect && viewFileBtn) {
        function toggleButtonState() {
            console.log('toggleButtonState called');
            console.log('fileSelect.value:', fileSelect.value);
            console.log('fileSelect.value !== "":', fileSelect.value !== '');
            
            if (fileSelect.value && fileSelect.value !== '') {
                console.log('Enabling button');
                viewFileBtn.disabled = false;
            } else {
                console.log('Disabling button');
                viewFileBtn.disabled = true;
            }
        }
        
        fileSelect.addEventListener('change', function() {
            console.log('Select changed event fired');
            toggleButtonState();
        });
        
        viewFileBtn.addEventListener('click', function() {
            viewFile();
        });
        
        toggleButtonState();
    } else {
        console.log('Elements not found - fileSelect:', fileSelect, 'viewFileBtn:', viewFileBtn);
    }
    
    function showModal() {
        modal.style.display = 'block';
    }
    
    function hideModal() {
        modal.style.display = 'none';
    }
    
    if (closeModal) {
        closeModal.addEventListener('click', hideModal);
    }
    
    if (cancelDownload) {
        cancelDownload.addEventListener('click', hideModal);
    }
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            hideModal();
        }
    });
    
    if (downloadFromDrive) {
        downloadFromDrive.addEventListener('click', function() {
            console.log('Downloading from Google Drive:', currentSelectedFile);
            const driveUrls = {
                'file5': 'https://drive.usercontent.google.com/download?id=1rOF8UuFWQ73YE6DIUX4-P7faZW-kDfKM&export=download&authuser=0&confirm=t&uuid=1de92168-f132-4fee-b4f4-60d3294dc398&at=AN8xHoq1jnkbzPhZh5RFkECT7nRY:1749716728485',
                'file6': 'https://drive.usercontent.google.com/download?id=1D1xz9tDbOxsIF4J_0nfQxs873lmLty58&export=download&authuser=0&confirm=t&uuid=a42aa2ef-552a-4a35-b97d-75702e89d9bd&at=AN8xHoohnQ1TNazdKJegnEGV79YE:1749716664382',
            };
            
            const driveUrl = driveUrls[currentSelectedFile];
            console.log('driveUrl:', driveUrl);
            if (driveUrl) {
                window.open(driveUrl, '_blank');
                hideModal();
            } else {
                alert('Google Drive link not available for this file.');
            }
        });
    }

    function viewFile() {
        console.log('viewFile function called');
        const selectedFile = fileSelect.value;
        currentSelectedFile = selectedFile;
        console.log('Selected file:', selectedFile);
        
        fetch('/static/textfiles/' + selectedFile + '.txt')
            .then(response => {
                if (response.ok) {
                    const link = document.createElement('a');
                    link.href = '/static/textfiles/' + selectedFile + '.txt';
                    link.download = selectedFile + '.txt';
                    
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    
                    console.log('File download triggered for:', selectedFile + '.txt');
                } else {
                    console.log('File does not exist:', selectedFile + '.txt');
                    showModal();
                }
            })
            .catch(error => {
                console.error('Error checking file:', error);
                showModal();
            });
    }
    
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}); 