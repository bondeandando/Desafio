function desenharGrafico(lista) {

	var chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		data: [{
			type: "doughnut",
			innerRadius: 60,
			startAngle: 240,
			showInLegend: true,
			yValueFormatString: "##0\"%\"",
			indexLabel: "{name} {y}",
			dataPoints: lista
		}],
		
	});
	chart.render();
	
}