$( document ).ready(function() {

    drawCategories();
    drawCards();
    drawCurricula();

});

function mapper(card){
    dispData={};
    dispData = _.pick(card, 'name', '', '');
    dispData.facess = _.map(card.facess, function (face){
        return _.pick(face, 'symbol', 'text');
    });

    return dispData;
}

function drawCards(){
     $.getJSON('http://127.0.0.1:8888/api/cardsList', function( data ) {

        var displayData = _.map(data, mapper)

        var headTempl =  '<table id="curiculaTable" class="table table-striped"> <thead> <tr>';
        var seperator =  '</thead>  <tbody> '; 
        var footer = '</tbody>  </table>';
        var titles = '<th>Name</th> ';
        var lines =  ''; 

       $.each( displayData[0].facess, function( key, val ) {
            titles += ' <th> ' + val.symbol + ' </th> '
       });

       $.each( displayData, function( key, card ) { 
           lines += '<tr> <td> ' + card.name + '</td>';
           $.each( card.facess, function( num, face ) { 
                lines += '<td> ' + face.text + '</td>'; 
           });
           lines+="</tr>";
       });

       var table = headTempl + titles + seperator + lines + footer;
       $( "<table/>", {
           id : "curiculaTable",
           class: "table table-striped",
           html: table
       }).appendTo( "body" );
     });
}


function drawCurricula(){
    $.getJSON( 'http://127.0.0.1:8888/api/curriculaList', function( data ) {

        var displayData = _.map(data, mapper)

        var headTempl =  '<table id="curiculaTable" class="table table-striped"> <thead> <tr>';
        var seperator =  '</thead>  <tbody> '; 
        var footer = '</tbody>  </table>';
        var titles = '<th>Name</th> ';
        var lines =  ''; 

       $.each( displayData[0].facess, function( key, val ) {
            titles += ' <th> ' + val.symbol + ' </th> '
       });

       $.each( displayData, function( key, card ) { 
           lines += '<tr> <td> ' + card.name + '</td>';
           $.each( card.facess, function( num, face ) { 
                lines += '<td> ' + face.text + '</td>'; 
           });
           lines+="</tr>";
       });

       var table = headTempl + titles + seperator + lines + footer;
       $( "<table/>", {
           id : "curiculaTable",
           class: "table table-striped",
           html: table
       }).appendTo( "body" );

    });
}


function catMapper(card){
    dispData={};
    dispData = _.pick(card, 'symbol', '', '');
    dispData.facess = _.map(card.facess, function (face){
        return _.pick(face, 'symbol', 'text');
    });

    return dispData;
}

function drawCategories(){ 
    $.getJSON( 'http://127.0.0.1:8888/api/categoriesList', function( data ) {
        var displayData = _.map(data, catMapper)

        var headTempl =  '<table id="curiculaTable" class="table table-striped"> <thead> <tr>';
        var seperator =  '</thead>  <tbody> '; 
        var footer = '</tbody>  </table>';
        var titles = '<th>Name</th> ';
        var lines =  ''; 

       $.each( displayData[0].facess, function( key, val ) {
            titles += ' <th> ' + val.symbol + ' </th> '
       });

       $.each( displayData, function( key, card ) { 
           lines += '<tr> <td> ' + card.symbol + '</td>';
           $.each( card.facess, function( num, face ) { 
                lines += '<td> ' + face.text + '</td>'; 
           });
           lines+="</tr>";
       });

       var table = headTempl + titles + seperator + lines + footer;
       $( "<table/>", {
           id : "curiculaTable",
           class: "table table-striped",
           html: table
       }).appendTo( "body" );
    });
}