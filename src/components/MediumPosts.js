import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const MediumPosts = () => {
  const posts = [
    {
      title: "Mushroom Classifier, All mushrooms are edible…At least once",
      link: "https://medium.com/@karenaraqueo/clasificador-de-hongos-e75a1b538605",
      image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*xtYFSEdLxvXl9NzzEZ5x_w.png",
    },
    {
      title: "Exploration of Platforms and Processing in Big Data: Hadoop, Spark, PySpark and ... ",
      link: "https://medium.com/@karenaraqueo/exploraci%C3%B3n-de-plataformas-y-procesamiento-en-big-data-hadoop-spark-pyspark-y-almacenamiento-2f2ef39b50b9",
      image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/0*5aE6ZxPpwiBFvkB5",
    },
    {
      title: "Soccer League Data Ingestion Project in Snowflake with Airflow and Astronomer",
      link: "https://medium.com/@karenaraqueo/proyecto-de-ingesta-de-datos-de-ligas-de-f%C3%BAtbol-en-snowflake-con-airflow-y-astronomer-a36299a3edc0",
      image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*aqUpJXEVeY_aRWu5UZKV_w.png",
    },
    {
      title: "Exploratory analysis of a property price dataset",
      link: "https://medium.com/@karenaraqueo/an%C3%A1lisis-exploratorio-de-un-dataset-de-precios-de-propiedades-c46639a0ed1c",
      image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*oMAjiiHHmO-RF-x23bmwpg.png",
    },
    {
      title: "Chi-Square Distribution with Dogs",
      link: "https://medium.com/@karenaraqueo/distribuci%C3%B3n-chi-cuadrado-con-perros-cc1b250913f0",
      image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*nRxHZRFLfKIYcmsn6xTF3A.png",
    },
    {
      title: "Prediction of Victory in Dota 2 based on Events of the First 15 Minutes",
      link: "https://medium.com/@karenaraqueo/predicci%C3%B3n-de-la-victoria-en-dota-2-basada-en-eventos-de-los-primeros-15-minutos-2a66256fcb6a",
      image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*lI4rXO_zBWv3tlaYG92YxA.png",
    },
    {
      title: "Property Appraiser Model",
      link: "https://medium.com/@karenaraqueo/modelo-tasador-de-propiedades-f6100fc10c4b",
      image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*lNFiobwk0ajAwsulc07qUw.png",
    },
    {
      title: "Sending the Daily Weather Forecast to your Cell Phone 📱☀️",
      link: "https://medium.com/@karenaraqueo/envio-del-pron%C3%B3stico-del-tiempo-diario-a-tu-celular-%EF%B8%8F-a6a2a565874c",
      image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*-oJ2uMpN8xcEkTmMwFNDdw.png",
    }
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const openPost = (link) => {
    window.open(link, '_blank');
  };

  return (
    <section className="medium-posts" id="medium-posts">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="medium-posts-bx wow zoomIn">
              <h2>Medium Posts</h2>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme medium-posts-slider">
                {posts.map((post, index) => (
                  <div key={index} className="post-card">
                    <img src={post.image} alt={post.title} className="post-image" />
                    <div className="post-content">
                      <h3>{post.title}</h3>
                      <button className="read-more-btn" onClick={() => openPost(post.link)}>Leer más</button>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 