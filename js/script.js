/******************************************
Treehouse Techdegree:
FSJS project 3 - Interactive Form
******************************************/
/*
// Study guide for this project - https://teamtreehouse.com/projects/interactive-form

/***
  Declare global variables, including;
  Set focus on first field (name) on page load
**/
$("input[name='user_name']").focus();
$( "#other-title" ).hide();
const $otherInput = $('#other-title');

$("#title").on('change', function() {
  if ($(this).val() === 'other') {
    return $otherInput.show();
  } else {
    return $otherInput.hide();
  }
});

  //Assign color option values to variables
const $cornflowerblue = $("#color option[value='cornflowerblue']");
const $darkslategrey = $("#color option[value='darkslategrey']");
const $gold = $("#color option[value='gold']");
const $tomato = $("#color option[value='tomato']");
const $steelblue = $("#color option[value='steelblue']");
const $dimgrey = $("#color option[value='dimgrey']");
const $colorMenu = $("#colorMenu");

//  Show or hide color options depending on selected design
$("#design").on('change', function() {
  if ($(this).val() === 'js puns') {
    $colorMenu.prop("selected",true);
    $cornflowerblue.show(), $darkslategrey.show(), $gold.show();
    $tomato.hide(), $steelblue.hide(), $dimgrey.hide();
    $colorMenu.hide();
  } else if ($(this).val() === 'heart js') {
    $colorMenu.prop("selected",true);
    $tomato.show(), $steelblue.show(), $dimgrey.show();
    $cornflowerblue.hide(), $darkslategrey.hide(), $gold.hide();
    $colorMenu.hide();
  } else {
    $colorMenu.prop("selected",true);
    $cornflowerblue.show(), $darkslategrey.show(), $gold.show();
    $tomato.show(), $steelblue.show(), $dimgrey.show();
  }
});

const $jsFrameworks = $("input[name='js-frameworks']");
const $express = $("input[name='express']");

$(".activities").click(function() {
  if ($jsFrameworks.prop('checked')) {
    $express.parent().addClass('isDisabled');
  }
});
