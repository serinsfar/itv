import React from 'react';
import user_1 from "../../assets/bide13.jpg"
import {
  CarouselComponent,
  CarouselItemsDirective,
  CarouselItemDirective,
} from '@syncfusion/ej2-react-navigations';

function Carousel() {
  return (
    <div className="control-container">
      <CarouselComponent pauseOnHover={false}>
        <CarouselItemsDirective>
          <CarouselItemDirective>
            <figure className="img-container">
              <img
                src={user_1}
                alt=""
                style={{ height: '100%', width: '100%' }}
              />
              <figcaption className="img-caption">Cardinal</figcaption>
            </figure>
          </CarouselItemDirective>
          <CarouselItemDirective>
            <figure className="img-container">
              <img
                src="https://ej2.syncfusion.com/products/images/carousel/hunei.png"
                alt="kingfisher"
                style={{ height: '100%', width: '100%' }}
              />
              <figcaption className="img-caption">Kingfisher</figcaption>
            </figure>
          </CarouselItemDirective>
          <CarouselItemDirective>
            <figure className="img-container">
              <img
                src="https://ej2.syncfusion.com/products/images/carousel/costa-rica.png"
                alt="keel-billed-toucan"
                style={{ height: '100%', width: '100%' }}
              />
              <figcaption className="img-caption">Keel-billed-toucan</figcaption>
            </figure>
          </CarouselItemDirective>
          <CarouselItemDirective>
            <figure className="img-container">
              <img
                src="https://ej2.syncfusion.com/products/images/carousel/kaohsiung.png"
                alt="yellow-warbler"
                style={{ height: '100%', width: '100%' }}
              />
              <figcaption className="img-caption">Yellow-warbler</figcaption>
            </figure>
          </CarouselItemDirective>
          <CarouselItemDirective>
            <figure className="img-container">
              <img
                src="https://ej2.syncfusion.com/products/images/carousel/bee-eater.png"
                alt="bee-eater"
                style={{ height: '100%', width: '100%' }}
              />
              <figcaption className="img-caption">Bee-eater</figcaption>
            </figure>
          </CarouselItemDirective>
        </CarouselItemsDirective>
      </CarouselComponent>
    </div>
  );
}

export default Carousel;
