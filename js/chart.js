document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('skill-radar').getContext('2d');
    if (ctx) {
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Cybersecurity', 'CTF', 'Web Development', 'Ethical Hacking', 'Python'],
                datasets: [{
                    label: 'Skills',
                    data: [80, 0, 70, 75, 70],
                    backgroundColor: 'rgba(0,123,255,0.2)',
                    borderColor: '#007bff',
                    borderWidth: 2,
                    pointBackgroundColor: '#007bff',
                    pointBorderColor: '#fff'
                }]
            },
            options: {
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: '#ccc'
                        }
                    }
                },
                elements: {
                    line: {
                        tension: 0
                    }
                }
            }
        });
    } else {
        console.warn('Canvas #skill-radar not found.');
    }
});