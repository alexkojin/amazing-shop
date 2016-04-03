import {Component, Input, OnInit} from 'angular2/core';
import {Product} from '../../models/product';

@Component({
  selector: 'image-slider',
  templateUrl: './app/components/image-slider/image-slider.component.html',
  styleUrls: ['./app/components/image-slider/image-slider.component.css']
})

export class ImageSliderComponent implements OnInit {
  @Input() product: Product;
  selectedImage: {thumb: string, large: string};

  ngOnInit() {
    this.selectedImage = this.product.imageSets[0];
  }

  selectImage(image: {thumb: string, large: string}) {
    this.selectedImage = image;
  }
}