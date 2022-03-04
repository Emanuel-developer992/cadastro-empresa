
window.onload = function() {

    var mobile = getMobile();
    console.log("--------");
    console.log(getFormMode());
    console.log(getWKNumState());
    console.log(getWKUser());
    console.log(getWKNumProces());
    console.log(getWKUserLocale());
    console.log(getWKCardId());
    console.log("--mobile--");
    console.log(mobile);
    console.log("--------");
    
    $('#mobile').val(mobile);

    dados();

};

function cadastro() {
    $("#menu_nav").removeClass('active');
    $("#menu_nav").addClass('nav-close');
    
    $("#cadastro_nav").removeClass('nav-close');
    $("#cadastro_nav").addClass('active');
};

function view() {
    $("#menu_nav").removeClass('active');
    $("#menu_nav").addClass('nav-close');
    
    $("#empresas_nav").removeClass('nav-close');
    $("#empresas_nav").addClass('active');
};

function back() {
    $("#cadastro_nav").removeClass();
    $("#empresas_nav").removeClass();
    $("#cadastro_nav").addClass('container tab-pane nav-close');
    $("#empresas_nav").addClass('container tab-pane nav-close');

    $("#menu_nav").addClass('active');
    $("#menu_nav").removeClass('nav-close');  
};

function header() {
    var cabecalho = [];
    
    //1ª tabela
    cabecalho.push("<b>Empresa</b>"); 
    cabecalho.push("<b>CNPJ</b>"); 
    cabecalho.push("<b>CEP</b>"); 
    cabecalho.push("<b>Endereço</b>"); 
    cabecalho.push("<b>Cidade</b>"); 
    cabecalho.push("<b>Estado</b>"); 
     
    
    var table = document.getElementById("tb_company");
	
	var numOfRows = table.rows.length;
	
	var numOfCols = 6;
	
	var newRow = table.insertRow(numOfRows);
	
	for (var i = 0; i < numOfCols; i++) {
	
		newCell = newRow.insertCell(i);
		
		newCell.innerHTML = cabecalho[i];
	}
};

function dados() {
    clearTable('tb_company');
    header();
    var clickCR = 0;

    var dataset = DatasetFactory.getDataset("DSFormulariodeCadastrodeEmpresa", null, null, null);

    var nRow = dataset.values.length;

    for (var i = 0; i < nRow; i++) {
        clickCR++;
        var aTb = [];
        var table = document.getElementById("tb_company");

        var empresa = dataset.values[i].empresa;
        var cnpj = dataset.values[i].cnpj;
        var cep = dataset.values[i].cep;
        var ender = dataset.values[i].ender;
        var city = dataset.values[i].cidade;
        var uf = dataset.values[i].estado;

        aTb.push(empresa);
        aTb.push(cnpj);
        aTb.push(cep);
        aTb.push(ender);
        aTb.push(city);
        aTb.push(uf);

        var table = document.getElementById("tb_company");
	
        var numOfRows = table.rows.length;
        
        var numOfCols = 6;
        
        var newRow = table.insertRow(numOfRows);
        
        for (var j = 0; j < numOfCols; j++) {
        
            newCell = newRow.insertCell(j);
            
            newCell.innerHTML = aTb[j];
        }
    }
};

function clearTable(tb) {

    $('#'+tb+' tr').remove();
};

/*function printDiv(divName) {

    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;
    
    document.body.innerHTML = printContents;
    
    window.print();
    
    document.body.innerHTML = originalContents;
    
};*/

function printDiv(divId) {

    var title = 'Relatório de Empresas Cadastradas'
  
    var style = "<style>";
    style = style + "table {width: 100%;font: 20px Calibri;margin-bottom: 30px}";
    style = style + "table, th, td {border: solid 1px #000000; border-collapse: collapse;";
    style = style + "padding: 2px 3px;text-align: center;}";
    style = style + "</style>";
  
    let mywindow = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150');
  
    mywindow.document.write(`<html><head><title>${title}</title>`);
    mywindow.document.write(style);
    mywindow.document.write('</head><body >');
    mywindow.document.write(document.getElementById(divId).innerHTML);
    mywindow.document.write('</body></html>');
  
    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/
  
    mywindow.print();
    mywindow.close();
  
    return true;
  }	