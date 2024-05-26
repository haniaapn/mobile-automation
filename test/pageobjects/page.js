class Elements {
    get openApp() { 
      return $('//android.view.ViewGroup/android.widget.TextView[1]') 
    }
  
    get nameInput() {
      return $('//android.widget.EditText[@resource-id="com.fghilmany.dietmealapp:id/et_name"]')
    }
  
    get weightInput() {
      return $('//android.widget.EditText[@resource-id="com.fghilmany.dietmealapp:id/et_weight"]')
    }
  
    get heightInput() {
      return $('//android.widget.EditText[@resource-id="com.fghilmany.dietmealapp:id/et_height"]')
    }
  
    get selectGender() {
      return $('//android.widget.RadioButton[@resource-id="com.fghilmany.dietmealapp:id/rb_female"]')
    }
  
    get btnNext () {
      return $('//android.widget.Button[@resource-id="com.fghilmany.dietmealapp:id/bt_next"]')
    }
  
    get selectActivity() {
      return $('//android.widget.RadioButton[@resource-id="com.fghilmany.dietmealapp:id/rb_rest"]')
    }
  
    get btnSelesai() {
      return $('//android.widget.Button[@resource-id="com.fghilmany.dietmealapp:id/bt_finish"]')
    }
  
    get expectToHome() {
      return $('//android.widget.TextView[@resource-id="com.fghilmany.dietmealapp:id/tv_header_name"]')
    }
  
    get expectErrorInput() {
      return $("//android.widget.LinearLayout/android.widget.TextView")
    }
  }
  
  module.exports = new Elements();