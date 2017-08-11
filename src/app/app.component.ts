import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: `./app.component.html`,
    styleUrls: [`./app.component.css`]
})

export class AppComponent {
    title = `Список продуктов`;
    listProduct = ["Молоко", "Вода", "Хлеб", "Сыр"]

    addProduct(text) {
        this.listProduct.push(text);
    }

    delProduct(e) {
        e.currentTarget.style.textDecoration != "line-through" ? 
        e.currentTarget.style.textDecoration = "line-through": 
        e.currentTarget.style.textDecoration = "none";
    }
}