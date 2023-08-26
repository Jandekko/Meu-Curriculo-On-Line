document.getElementById("download-button").addEventListener("click", function() {
    // Crie um elemento 'a' para simular o download do arquivo
    var link = document.createElement('a');
    link.href = 'Arquivo_Para_baixar/Curriculo - Jandersson F de Paula.pdf'; // Substitua pelo caminho real do seu PDF
    link.target = '_blank';
    link.download = 'curriculo - Jandersson.pdf'; // Nome do arquivo que será baixado
  
    // Simule o clique no link para iniciar o download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
  });
  // Função para alternar entre os modos claro e escuro
function toggleTheme() {
    var darkTheme = document.getElementById('dark-theme');
    var lightTheme = document.getElementById('light-theme');
  
    if (darkTheme.disabled) {
      darkTheme.removeAttribute('disabled');
      lightTheme.disabled = true;
    } else {
      darkTheme.disabled = true;
      lightTheme.removeAttribute('disabled');
    }
  }
  
  // Adicione um evento de clique ao botão de alternância
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  
  