document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.getElementById('copy-button');
    const textbox = document.getElementById('prompt-textbox');

    if (copyButton && textbox) {
        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(textbox.value).then(() => {
                copyButton.textContent = 'Copied!';
                setTimeout(() => {
                    copyButton.textContent = 'Copy Prompt';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    }
});
