/******************************************
Treehouse Techdegree:
FSJS project 3 - Interactive Form
******************************************/

// Study guide for this project - https://teamtreehouse.com/projects/interactive-form

// Set all validity checksfor form submission to false
let validName = false;
let validEmail = false;
let validActivity = false;
let validCC = false;
let validZip = false;
let validCVV = false;

// Define input field variables and their content check variables
const $name = $("input[name='user_name']");
let $nameCheck = $name.val();
const $email = $("input[name='user_email']");
let $emailCheck = $email.val();
const $register = $("button[type='submit']");
let $fieldset = $("fieldset[class='activities']");
const $activityAlert = $("<span>Please select at least one activity</span>").css("font-weight", "bold");
const $cc = $("input[name='user_cc-num']");
let $ccCheck = $cc.val();
const $zip = $("input[name='user_zip']");
let $zipCheck = $zip.val();
const $cvv = $("input[name='user_cvv']");
let $cvvCheck = $cvv.val();

//Set focus on name field on page load
$name.focus();

// Under Job Role, hide "Other" job input field on page load
$( "#other-title" ).hide();
const $otherInput = $('#other-title');
// Show "Other" input field when "Other" is selected
$("#title").on('change', function() {
  if ($(this).val() === 'other') {
    return $otherInput.show();
  } else {
    return $otherInput.hide();
  }
});

// Assign color option values to variables
const $cornflowerblue = $("#color option[value='cornflowerblue']");
const $darkslategrey = $("#color option[value='darkslategrey']");
const $gold = $("#color option[value='gold']");
const $tomato = $("#color option[value='tomato']");
const $steelblue = $("#color option[value='steelblue']");
const $dimgrey = $("#color option[value='dimgrey']");
const $colorMenu = $("#colorMenu");

// Show or hide color options depending on selected design
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

// Define Activity variables
const $checkbox = $("input[type='checkbox']");
const $jsFrameworks = $("input[name='js-frameworks']");
const $express = $("input[name='express']");
const $jsLibs = $("input[name='js-libs']");
const $node = $("input[name='node']");
const $mainConf = $("input[name='all']");
const $buildTools = $("input[name='build-tools']");
const $npm = $("input[name='npm']");

// Initialize cost at zero and append cost info at bottom of Activities fieldset
let cost = 0;
let $costUpdate = $("<span name='costUpdate'> 0 </span>");
let $costAlert = $("<span> Your Total is: " + '$' + " </span> ");

// Deselect conflicting activities when one is selected
// If JS Frameworks workshop selected, hide Express workshop
$($jsFrameworks).click(function() {
  if ($jsFrameworks.prop('checked')) {
    $express.attr('disabled', 'disabled').parent().css("text-decoration", "line-through");
  } else if ($jsFrameworks.prop('checked', false)) {
    $express.attr('disabled', false).parent().css("text-decoration", "none");
  }
});
// If Express workshop selected, hide JS Frameworks workshop
$($express).click(function() {
  if ($express.prop('checked')) {
    $jsFrameworks.attr('disabled', 'disabled').parent().css("text-decoration", "line-through");
  } else if ($express.prop('checked', false)) {
    $jsFrameworks.attr('disabled', false).parent().css("text-decoration", "none");
  }
});
// If JS Libraries workshop selected, hide Node.js workshop
$($jsLibs).click(function() {
  if ($jsLibs.prop('checked')) {
    $node.attr('disabled', 'disabled').parent().css("text-decoration", "line-through");
  } else if ($jsLibs.prop('checked', false)) {
    $node.attr('disabled', false).parent().css("text-decoration", "none");
  }
});
// If Node.js workshop selected, hide JS Libraries workshop
$($node).click(function() {
  if ($node.prop('checked')) {
    $jsLibs.attr('disabled', 'disabled').parent().css("text-decoration", "line-through");
  } else if ($node.prop('checked', false)) {
    $jsLibs.attr('disabled', false).parent().css("text-decoration", "none");
  }
});

//Display running total for selected Activities
$checkbox.change(function(event) {
    if ($(this).prop('checked')) {
    cost += 100;
    $costUpdate.text(cost);
  } else if ($(this).prop('checked', false)) {
    cost -= 100;
    $costUpdate.text(cost);
  }
});
// Add/subtract extra $100 for Main Conference activity
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

// Define payment info variables for selected payment option
const $creditCard = $("select option[value='credit card']");
const $paypal = $("select option[value='paypal']");
const $bitcoin = $("select option[value='bitcoin']")
const $payment = $("select[name='user_payment']");
const $p_Paypal = $("p:contains('PayPal')");
const $p_Bitcoin = $("p:contains('Bitcoin')");
const $ccDetails = $("div[id='credit-card']").find("div, label, select");

//On page load, display credit card with no Paypal/Bitcoin info
$("select option[value='credit card']").attr("selected", true);
$("option[value='select_method']").attr("disabled", true);

// When one payment type is selected, hide other payment method details
$payment.change(function(event) {
  $ccDetails.hide();
  $p_Paypal.hide();
  $p_Bitcoin.hide();
  if ( $creditCard.is(":selected")) {
    $ccDetails.show();
 } else if ( $paypal.is(":selected")) {
    $p_Paypal.show();
 } else if ( $bitcoin.is(":selected")) {
    $p_Bitcoin.show();
 }
});

// Check for presence of name and set validName to true for use in submit function
function isValidName() {
  $nameCheck = $name.val();
  if ($name.val().length === 0) {
    $name.attr("placeholder", "Please enter a name").css("background-color", "yellow");
    validName = false;
  } else if ($name.val().length > 0) {
    $name.css("background-color", "#accbd9");
    validName = true;
  }
};
// Check for valid email and set validEmail to true for use in submit function
function isValidEmail() {
  $emailCheck = $email.val();
  const eRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if ($email.val().length === 0) {
    $email.attr("placeholder", "Please enter an email address").css("background-color", "yellow");
    validEmail = false;
  } else if (eRegex.test($emailCheck)) {
    validEmail = true;
  } else {
    $email.attr("style", "background:yellow");
    validEmail = false;
  }
};
// Check at least one activity selected and set validActivity to true for use in submit function
function isValidActivity() {
  let $checkbox = $("input[type='checkbox']");
  if ($("[type='checkbox']:checked").length == 0) {
    $checkbox.parent().css("background-color", "yellow");
    $fieldset.prepend($activityAlert);
    validActivity = false;
  } else {
    validActivity = true;
  }
};
// Check for valid credit card number and set validCC to true for use in submit function
// Reset $ccCheck to currently entered data
function isValidCC() {
  const ccRegex = /^[0-9]{13,16}$/;
  $ccCheck = $cc.val();
    if ($cc.val().length === 0) {
    $cc.attr("placeholder", "Please enter a credit card number").css("background-color", "yellow");
    validCC = false;
  } else if (ccRegex.test($ccCheck)) {
    $cc.css("background-color", "#accbd9");
    validCC = true;
  } else {
    $cc.attr("style", "background:yellow");
    validCC = false;
  }
};
// Check for valid zip and set validZip to true for use in submit function
// Reset $zipCheck to currently entered data
function isValidZip() {
  const zipRegex = /^[0-9]{5}$/;
  $zipCheck = $zip.val();
  if ($zip.val().length === 0) {
    $zip.attr("placeholder", "Please enter a valid zip code").css("background-color", "yellow");
    validZip = false;
  } else if (zipRegex.test($zipCheck)) {
    $zip.css("background-color", "#accbd9");
    validZip = true;
  } else {
    $zip.attr("style", "background:yellow");
    validZip = false;
  }
};
// Check for valid CVV code and set validCVV to true for use in submit function
// Reset $cvvCheck to currently entered data
function isValidCVV() {
    const cvvRegex = /^[0-9]{3}$/;
    $cvvCheck = $cvv.val();
    if (($cvv.val().length === 0)) {
      $cvv.attr("placeholder", "Please enter a valid CVV code.").css("background-color", "yellow");
      validCVV = false;
    } else if (cvvRegex.test($cvvCheck)) {
      $cvv.css("background-color", "#accbd9");
      validCVV = true;
    } else {
      $cvv.attr("style", "background:yellow");
      validCVV = false;
    }
};

// Run valiation function checks on submit
$("form").submit(function(event) {
//  event.preventDefault();
  isValidName();
  if (validName === false) {
    event.preventDefault();
  }
  isValidEmail();
  if (validEmail === false) {
    event.preventDefault();
  }
  isValidActivity();
  if (validActivity === false) {
    event.preventDefault();
  }
//  If Credit Card payment selected, run additional checks on required fields
  if ( $creditCard.is(":selected")) {
    isValidCC();
    if (validCC === false) {
      console.log($ccCheck);
      event.preventDefault();
    }
    isValidZip();
    if (validZip === false) {
      console.log($zipCheck);
      event.preventDefault();
    }
    isValidCVV();
    if (validCVV === false) {
      console.log($cvvCheck);
      event.preventDefault();
    }
  }
});

// Clear name field and remove error styling on user click
$name.click(function() {
  $name.css("background-color", "#accbd9");
  $name.val(" ");
});
// Clear email field on user click
$email.click(function() {
  $email.css("background-color", "#accbd9");
  $email.val(" ");
});
// Hide activity alert when checkbox is selected
$checkbox.click(function() {
  $checkbox.parent().css("background-color", "#85b5ca");
  $activityAlert.hide();
});
// Clear credit card field on user click
$cc.click(function(){
  $cc.css("background-color", "#accbd9");
  $cc.val(" ");
});
// Clear zip field on user click
$zip.click(function(){
  $zip.css("background-color", "#accbd9");
  $zip.val(" ");
});
// Clear cvv field on user click
$cvv.click(function(){
  $cvv.css("background-color", "#accbd9");
  $cvv.val(" ");
});
