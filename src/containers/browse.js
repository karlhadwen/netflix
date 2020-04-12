import React from 'react';
import { useSeries } from '../hooks/useSeries';
import { Card, Slider } from '../components';

export function BrowseContainer() {
  const { series } = useSeries();

  const documentaries = series.filter((item) => item.genre === 'documentaries');
  const comedies = series.filter((item) => item.genre === 'comedies');
  const children = series.filter((item) => item.genre === 'children');
  const crime = series.filter((item) => item.genre === 'crime');
  const feelGood = series.filter((item) => item.genre === 'feel-good');

  return (
    <>
      <Slider>
        <Slider.Title>Documentaries</Slider.Title>
        <Card.Group>
          {documentaries?.map((item) => (
            <Card.Item key={item.docId}>
              <Card.Cta backgroundSrc={`/images/series/${item.genre}/${item.slug}/small.jpg`} />
            </Card.Item>
          ))}
        </Card.Group>
      </Slider>

      <Slider>
        <Slider.Title>Comedies</Slider.Title>
        <Card.Group>
          {comedies?.map((item) => (
            <Card.Item key={item.docId}>
              <Card.Cta backgroundSrc={`/images/series/${item.genre}/${item.slug}/small.jpg`} />
            </Card.Item>
          ))}
        </Card.Group>
      </Slider>

      <Slider>
        <Slider.Title>Children</Slider.Title>
        <Card.Group>
          {children?.map((item) => (
            <Card.Item key={item.docId}>
              <Card.Cta backgroundSrc={`/images/series/${item.genre}/${item.slug}/small.jpg`} />
            </Card.Item>
          ))}
        </Card.Group>
      </Slider>

      <Slider>
        <Slider.Title>Crime</Slider.Title>
        <Card.Group>
          {crime?.map((item) => (
            <Card.Item key={item.docId}>
              <Card.Cta backgroundSrc={`/images/series/${item.genre}/${item.slug}/small.jpg`} />
            </Card.Item>
          ))}
        </Card.Group>
      </Slider>

      <Slider>
        <Slider.Title>Feel Good</Slider.Title>
        <Card.Group>
          {feelGood?.map((item) => (
            <Card.Item key={item.docId}>
              <Card.Cta backgroundSrc={`/images/series/${item.genre}/${item.slug}/small.jpg`} />
            </Card.Item>
          ))}
        </Card.Group>
      </Slider>
    </>
  );
}
