/**
 * Implements hook_deviceready().
 */
function ilookadorable_deviceready() {
  try {
    return false;
  }
  catch (error) {
    alert('ilookadorable_deviceready - ' + error);
  }
}

/**
 * Implements hook_menu().
 */
function ilookadorable_menu() {
  try {
    var items = {
      "clothes":{
        title:"Clothes",
        page_callback:"ilookadorable_clothes_page"
      }
    };
    return items;
  }
  catch (error) {
    alert('ilookadorable_menu - ' + error);
  }
}

/**
 *
 */
function ilookadorable_clothes_page() {
  try {
    console.log(JSON.stringify(drupalgap_field_info_instances('node', 'clothing')));
    return "HELLO";
  }
  catch (error) {
    alert('ilookadorable_clothes_page - ' + error);
  }
}

