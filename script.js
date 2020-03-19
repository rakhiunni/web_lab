/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$('#toggle_navbar').click(function ()
{
    $("#navbarNav").css("display", "block");
    $("#close-button").css("display", "block");
    $("#toggle_navbar").css("display", "none");
});
$('#close-button').click(function ()
{
    $("#navbarNav").css("display", "none");
    $("#close-button").css("display", "none");
    $("#toggle_navbar").css("display", "block");
});
