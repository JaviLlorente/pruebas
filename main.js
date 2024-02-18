<!DOCTYPE html>
<html>
    <head>
        <title>Leaflet web map with Google Sheets</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/leaflet.css"/>
        <link rel="stylesheet" href="css/font-awesome.min.css"/>
        <link rel="stylesheet" href="css/leaflet.awesome-markers.css"/>
        <link rel="stylesheet" href="css/leaflet-sidebar.css"/>
		
		<link rel="stylesheet" href="dist/nouislider.css"/>
		
        <style>
			body {
				padding: 0;
				margin: 0;
			}
			html, body, #map {
				height: 98.65%;
				width: 100%;
			}
			#sidebar-content, #sidebar-title {
				word-break: break-word;
				margin-right: 40px;
			}
			.slider {
				height:20em; 				
				float: left;
				bottom: 0; 
				<!--marging-left: 10px;
				marging-bottom: 4em;-->
				padding-left:20em;
				padding-bottom:20em;
			}

        </style>
    </head>
		
    <body>	
			
	<!--NUEVO-->
		<font face="arial" size=2em color="black" >
		<div id="panel" style = "margin-left:0px; background-color:#D3D3D3;">
			
			<form name="form1" id="form1" style="height:1.7em;" > 
				<label>&nbsp;&nbsp;&nbsp;Clase</label>
				<select name="claseX" id='claseX' style="margin-right:1em">
					<option value="-"selected>Seleccione...</opcion>
					<option value="MAMIFERO">MAMIFEROS</opcion>
					<option value="AVE">AVES</opcion>
					<option value="REPTIL">REPTILES</opcion>
					<option value="ANFIBIO">ANFIBIOS</opcion>					
				</select>
				
				<label>Especie</label>
				<select name="especieX" id='especieX' style="margin-right:25px"> 
					<option value="-">...</option> 
				</select>
				
				<!--<label>entre</label>
				<select id="start" name="start" style=" width:4em; "> </select>	
				<label>&nbsp;y&nbsp;</label>
				<select id="end" name="end" style=" width:4em; "> </select>-->
	
				<!--<label>&nbsp;&nbsp;&nbsp;Desde </label>
				<input type="date" id="start" name="trip-start" />	
				<label>&nbsp;hasta </label>
				<input type="date" id="end" name="trip-end" />-->		
					
				<!--<input type="range" min="1" max="100" value="50" name="rango">-->
				
				
			
				<span name="form2" id="form2" style="height:auto;" >				
					<input type="text" id="Narray" name="Narray" style="width:2.7em; height:fit-content; float:right; text-align:right; margin-right:10px; background-color:#EAEDED" readonly><br><br>
				</span> 				
			</form>
			
		</div>
		</font>
		
	<!--FIN DE NUEVO-->
		<script src="dist/nouislider.js"></script>
		<script src="js/leaflet.js"></script>
        <script src="js/leaflet-sidebar.js"></script>
        <script src="js/leaflet.awesome-markers.min.js"></script>
        <script src="js/papaparse.min.js"></script>
		
		<script src="leafletspin/spin/spin.min.js" charset="utf-8"></script>
		<script src="leafletspin/leaflet.spin.min.js"></script>
		<script src="leafletspin/leaflet.spin.js"></script>
		
        <script src="main.js" defer></script>
		
        <div id="slider" class="slider" style="position:relative; z-index:1; "></div>
		<div id="map" style="position:absolute; z-index:0; "></div>
		
    </body>
	
</html>
