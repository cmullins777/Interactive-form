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
$name = $("input[name='user_name']")
$name.focus();
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

const $checkbox = $("input[type='checkbox']");
const $jsFrameworks = $("input[name='js-frameworks']");
const $express = $("input[name='express']");
const $jsLibs = $("input[name='js-libs']");
const $node = $("input[name='node']");
const $mainConf = $("input[name='all']");
const $buildTools = $("input[name='build-tools']");
const $npm = $("input[name='npm']");
let cost = 0;
let $costUpdate = $("<span name='costUpdate'> 0 </span>");
let $costAlert = $("<span> Your Total is: " + '$' + " </span> ");
//let $activities = $('.activities');
//$activities.append($costAlert);
//$costAlert.append(actCost);

//  Deselect conflicting activities when one is selected
//  Reinstate option if checkbox is unclicked
$($jsFrameworks).click(function() {
  if ($jsFrameworks.prop('checked')) {
    $express.attr('disabled', 'disabled').parent().css("text-decoration", "line-through");
  } else if ($jsFrameworks.prop('checked', false)) {
    $express.attr('disabled', false).parent().css("text-decoration", "none");
  }
});

$($express).click(function() {
  if ($express.prop('checked')) {
    $jsFrameworks.attr('disabled', 'disabled').parent().css("text-decoration", "line-through");
  } else if ($express.prop('checked', false)) {
    $jsFrameworks.attr('disabled', false).parent().css("text-decoration", "none");
  }
});

$($jsLibs).click(function() {
  if ($jsLibs.prop('checked')) {
    $node.attr('disabled', 'disabled').parent().css("text-decoration", "line-through");
  } else if ($jsLibs.prop('checked', false)) {
    $node.attr('disabled', false).parent().css("text-decoration", "none");
  }
});

$($node).click(function() {
  if ($node.prop('checked')) {
    $jsLibs.attr('disabled', 'disabled').parent().css("text-decoration", "line-through");
  } else if ($node.prop('checked', false)) {
    $jsLibs.attr('disabled', false).parent().css("text-decoration", "none");
  }
});

//Display running total for selected Activities
//Add, Subtract extra $100 for Main Conference
$checkbox.change(function(event) {
    if ($(this).prop('checked')) {
    cost += 100;
    $costUpdate.text(cost);
  } else if ($(this).prop('checked', false)) {
    cost -= 100;
    $costUpdate.text(cost);
  }
});

$mainConf.change(function(event) {
    if ($(this).prop('checked')) {
    cost += 100;
    $costUpdate.text(cost);
  } else if ($(this).prop('checked', false)) {
    cost -= 100;
    $costUpdate.text(cost);
  }
});
// Append calculated cost to bottom of activities section
$activities = $('.activities');
$activities.append($costAlert);
$costAlert.append($costUpdate);

// Display payment info for selected payment option
const $creditCard = $("select option[value='credit card']");
const $paypal = $("select option[value='paypal']");
const $bitcoin = $("select option[value='bitcoin']")
const $payment = $("select[name='user_payment']");
const $p_Paypal = $("p:contains('PayPal')");
const $p_Bitcoin = $("p:contains('Bitcoin')");
const $ccDetails = $("div[id='credit-card']").find("div, label, select");

//On page load, display credit card with no Paypal/Bitcoin info
$("select option[value='credit card']").attr("selected", true);

// When PayPal is selected, hide other payment method details

$payment.change(function(event) {
  let target = $(event.target);
  $ccDetails.hide();
  $p_Paypal.hide();
  $p_Bitcoin.hide();
  if ( target.is($paypal)) {
    $ccDetails.hide();
    $p_Paypal.show();
    $p_Bitcoin.hide();
 } else if ( target.is($bitcoin)) {
    $ccDetails.hide();
    $p_Paypal.hide();
    $p_Bitcoin.show();
 } else if ( target.is($creditCard)) {
   $ccDetails.show();
   $p_Paypal.hide();
   $p_Bitcoin.hide();
 }
});

//} else if ($bitcoin.attr("selected", true))
const $register = $("button[type='submit']");
let $nameCheck = $name.val();
 /**
$register.click(function(event) {
  if ($nameCheck === " ") {
      $name.
  }
});
**/



// ($bitcoin.attr("selected", true)) {
//   $ccDetails.hide();
//   $pPaypal.hide();
//   $pBitcoin.show();
// } else if ($creditCard.attr("selected", true)) {
//   $ccDetails.show();
//   $pPaypal.hide();
//   $pBitcoin.hide();
// }
//});









// When Bitcoin is selected, hide other payment method details
