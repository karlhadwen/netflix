export default function selectionFilter({ series, films } = []) {
  // return {
  //   series: [
  //     { title: 'Documentaries', data: series?.filter((item) => item.genre === 'documentaries') },
  //     { title: 'Comedies', data: series?.filter((item) => item.genre === 'comedies') },
  //     { title: 'Children', data: series?.filter((item) => item.genre === 'children') },
  //     { title: 'Crime', data: series?.filter((item) => item.genre === 'crime') },
  //     { title: 'Feel Good', data: series?.filter((item) => item.genre === 'feel-good') },
  //   ],
  //   films: [
  //     { title: 'Drama', data: films?.filter((item) => item.genre === 'drama') },
  //     { title: 'Thriller', data: films?.filter((item) => item.genre === 'thriller') },
  //     { title: 'Children', data: films?.filter((item) => item.genre === 'children') },
  //     { title: 'Suspense', data: films?.filter((item) => item.genre === 'suspense') },
  //     { title: 'Romance', data: films?.filter((item) => item.genre === 'romance') },
  //   ],
  // };

  const seriesUniqTypes = new Set(series?.map(item => (item.genre)))
  const filmsUniqTypes = new Set(films?.map(item => (item.genre)))

  return {
    series: [
      ...Array.from(seriesUniqTypes).map(type =>({
        title: type.replace("-", " "),
        data: series.filter(item=> item.genre === type)
      }))
    ],
    films: [
      ...Array.from(filmsUniqTypes).map(type =>({
        title: type.replace("-", " "),
        data: films.filter(item=> item.genre === type)
      }))
    ],
  };
}
