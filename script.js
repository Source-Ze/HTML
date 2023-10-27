document.getElementById("file").addEventListener("change", function(event) {
    const fileInfo = event.target.files[0];
    const fileInfoDisplay = `Selected File: ${fileInfo.name} (${(fileInfo.size / (1024 * 1024)).toFixed(2)} MB)`;
    document.getElementById("file-info").innerText = fileInfoDisplay;
});

document.getElementById("upload-btn").addEventListener("click", function() {
    const fileInput = document.getElementById("file");
    const file = fileInput.files[0];

    if (file) {
        const formData = new FormData();
        formData.append("file", file);

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "upload.php", true);

        xhr.upload.onprogress = function(event) {
            const progressBar = document.getElementById("progress-bar");
            const percent = (event.loaded / event.total) * 100;
            progressBar.style.width = percent + "%";
            progressBar.innerText = percent.toFixed(2) + "%";
        };

        xhr.onload = function() {
            const message = document.getElementById("message");
            if (xhr.status == 200) {
                message.innerText = "تم رفع الملف بنجاح عزيزي شكرا لأستخدامك خدماتنا";
            } else {
                message.innerText = "لم يتم رفع الملف عزيزي. ";
            }
        };

        xhr.send(formData);
        document.getElementById("progress-container").style.display = "block";
    } else {
        document.getElementById("message").innerText = "قم باختيار الملف اولا عزيزي. ";
    }
});
