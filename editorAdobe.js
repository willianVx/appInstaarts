var featherEditor = new Aviary.Feather({
        apiKey: '995ec79f58ba414eadd228d643192c39',
        theme: `light`,
        language: `pt_BR`,
        tools: ['effects','overlays','orientation','crop','resize','lighting','color','focus','vignette'],
       // para forçar a ativação de uma unica ferramenta exemplo --> initTool:'crop', 
        onSave: function(imageID, newURL) {
            var img = document.getElementById(imageID);
            img.src = newURL;
            featherEditor.close();
        }
    });
    function launchEditor(id, src) {
        featherEditor.launch({
            image: id,
            url: src
        });
        return false;
    }
    var featherEditor = new Aviary.Feather(configObj);