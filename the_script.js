$(document).ready(function(){
 		// awal Button Show
 		$("button#show").click(function(){
 			$("table").show();
 		});
 		$("button#show").click(function(){
 			$(this).hide();
 		});
 		$("button#show").click(function(){
 			$("table").css("display", "table");
 		});
 		$("button#show").click(function(){
 			$("button#hide").show();
 		});
 		$("button#show").click(function(){
 			$("button#style").show()
 		});
 		$("button#show").click(function(){
 			$("tr:even").css("background-color", "white");
 			$("tr:odd").css("background-color", "white");
 		});
 		// akhir Button Show
 		// awal Button Style
 		$("button#style").click(function(){
 			$(this).hide();
 		});
 		$("button#style").click(function(){
 			$("tr:even").css("background-color", "lightblue");
 			$("tr:odd").css("background-color", "lightgreen");
 		});
 		// akhir Button Style
 		// awal Button Hide
 		$("button#hide").click(function(){
 			$("button#show").show();
 		});
 		$("button#hide").click(function(){
 			$("table").hide();
 		});
 		$("button#hide").click(function(){
 			$(this).hide();
 		});
 		$("button#hide").click(function(){
 			$("button#style").hide()
 		});
 		// akhir Button Hide
 	});