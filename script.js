// Dark Mode Toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = 'Toggle Dark Mode';
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Adding dark mode styles
const darkModeStyles = `
  .dark-mode {
    background-color: #333;
    color: white;
  }

  .dark-mode header {
    background: linear-gradient(135deg, #1e3d58, #20c997);
  }

  .dark-mode section {
    background-color: #444;
    color: white;
  }

  .dark-mode button {
    background-color: #17a2b8;
    color: white;
  }

  .dark-mode footer {
    background-color: #222;
  }
`;

const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = darkModeStyles;
document.head.appendChild(styleSheet);