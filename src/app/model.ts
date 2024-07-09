export class Model{//model tanımla
    user;//user model
    items;//dizinin tutulacağı model
    constructor(){//sınıfın ilk işlemi değerleri ata
        this.user = "Nehir";//user değişkenine değer ata
            this.items = [//items dizisine değerleri ata
                new TodoItem("spor", true),//todoItem classına uygun değer ata
                new TodoItem("kahvaltı", false),
                new TodoItem("kitap okumak", false),
                new TodoItem("sinema", false),
          ];
    }
}

export class TodoItem{//todoItem 
    description;//description değişkeni oluşturuluyor
    action;//action değişkeni oluşturuluyor
    constructor(description: string, action: boolean){//sınıfın ilk işlemi değişkenleri dolduruyor
        this.description = description;//değişkenler model sınıfından gelen verilerle dolduruluyor
        this.action = action;//değişkenler model sınıfından gelen verilerle dolduruluyor
    }
}