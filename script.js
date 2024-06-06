function toggleChildren(element) {
    var filhos = element.querySelector('.filhos');
    if (filhos) {
        var isVisible = filhos.style.display === 'block';
        filhos.style.display = isVisible ? 'none' : 'block';
    }
    event.stopPropagation();
}

document.addEventListener('DOMContentLoaded', function () {
    const sheets = document.querySelectorAll('.sistema');

    sheets.forEach(sheet => {
        sheet.addEventListener('mouseenter', function (event) {
            const tooltipText = sheet.getAttribute('data-tooltip');
            if (tooltipText) {
                let tooltip = document.querySelector('.tooltip');
                if (!tooltip) {
                    tooltip = document.createElement('div');
                    tooltip.classList.add('tooltip');
                    document.body.appendChild(tooltip);
                }
                tooltip.innerText = tooltipText;
                tooltip.style.display = 'block';

                const rect = sheet.getBoundingClientRect();
                tooltip.style.left = `${rect.left + window.scrollX}px`;
                tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight - 10}px`;
            }
        });

        sheet.addEventListener('mouseleave', function () {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.style.display = 'none';
            }
        });
    });
});

