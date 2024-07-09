import { Component } from '@angular/core';
import { Model, TodoItem } from './model';//model.ts dosyası, model ve todoItem import edilir.

@Component({
  selector: 'app-root',//appcompanent.html index.html dosyası içerisindeki approot tagları içerisine eklenir
  templateUrl: './app.component.html',//approot taglarının içine hangi içerik eklenecekse yolu belirtilir
  styleUrl: './app.component.css'//css dosyası olarak ne kullanılacaksa burada belirtilir
})
export class AppComponent {//uygulamanın karar mekanizması
    model = new Model();
    isDisplay = false;
    getName(){
      return this.model.user;
    }

    getItems(){
      if(this.isDisplay){
        
        return this.model.items;
      }
        return this.model.items.filter(item =>!item.action);//model.items içindeki action değerlerini filtreliyoruz
    }
    addItem(value: string){
        if(value!=""){//kullanıcının girdiği değer varmı yokmu
          this.model.items.push(new TodoItem(value,false));//kullanıcının inputa girdiği değer eklenir
        }
    }
}
