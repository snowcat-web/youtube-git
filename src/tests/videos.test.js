import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoList from '../components/Video/VideoList';

  const videoListProps = [{
    "kind":"youtube#searchResult",
    "etag":"Jiak50jVoJ9_Uscl6Dwcb7VySqI",
    "id":{
      "kind":"youtube#video",
      "videoId":"nmXMgqjQzls"},
    "snippet":{
      "publishedAt":"2019-09-30T23:54:32Z",
      "channelId":"UCPGzT4wecuWM0BH9mPiulXg",
      "title":"Video Tour | Welcome to Wizeline Guadalajara",
      "description":"Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...",
      "thumbnails":{
        "default":{
          "url":"https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg",
          "width":120,
          "height":90},
        "medium":{
          "url":"https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg",
          "width":320,"height":180},
        "high":{
            "url":"https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg",
            "width":480,
            "height":360}},
      "channelTitle":"Wizeline",
      "liveBroadcastContent":"none",
      "publishTime":"2019-09-30T23:54:32Z"}},
    {
    "kind":"youtube#searchResult",
    "etag":"0Yrs6aTmQBUVQ7UajRtJfcx2wuQ",
    "id":{
      "kind":"youtube#video",
      "videoId":"HYyRZiwBWc8"},
    "snippet":{
      "publishedAt":"2019-04-18T18:48:04Z",
      "channelId":"UCPGzT4wecuWM0BH9mPiulXg",
      "title":"Wizeline Guadalajara | Bringing Silicon Valley to Mexico",
      "description":"Wizeline continues to offer a Silicon Valley culture in burgeoning innovation hubs like Mexico and Vietnam. In 2018, our Guadalajara team moved into a ...",
      "thumbnails":{
        "default":{
          "url":"https://i.ytimg.com/vi/HYyRZiwBWc8/default.jpg",
          "width":120,
          "height":90},
        "medium":{
          "url":"https://i.ytimg.com/vi/HYyRZiwBWc8/mqdefault.jpg",
          "width":320,"height":180},
        "high":{
          "url":"https://i.ytimg.com/vi/HYyRZiwBWc8/hqdefault.jpg",
          "width":480,
          "height":360}},
      "channelTitle":"Wizeline",
      "liveBroadcastContent":"none",
      "publishTime":"2019-04-18T18:48:04Z"}},
    {
    "kind":"youtube#searchResult",
    "etag":"okUoPJk53189maAhh-WjNrOWQOQ",
    "id":{
      "kind":"youtube#video",
      "videoId":"Po3VwR_NNGk"},
    "snippet":{
      "publishedAt":"2019-03-05T03:52:55Z",
      "channelId":"UCXmAOGwFYxIq5qrScJeeV4g",
      "title":"Wizeline hace sentir a empleados como en casa",
      "description":"En el 2014, Bismarck fundó Wizeline, compañía tecnológica que trabaja con los corporativos ofreciendo una plataforma para que desarrollen software de forma ...",
      "thumbnails":{
        "default":{
          "url":"https://i.ytimg.com/vi/Po3VwR_NNGk/default.jpg",
          "width":120,
          "height":90},
        "medium":{
          "url":"https://i.ytimg.com/vi/Po3VwR_NNGk/mqdefault.jpg",
          "width":320,
          "height":180},
        "high":{
          "url":"https://i.ytimg.com/vi/Po3VwR_NNGk/hqdefault.jpg",
          "width":480,
          "height":360}},
      "channelTitle":"El Economista TV",
      "liveBroadcastContent":"none",
      "publishTime":"2019-03-05T03:52:55Z"}},
    {
    "kind":"youtube#searchResult",
    "etag":"i1ZSt88rIUlEybpRNhxeeOZF0LY",
    "id":{
      "kind":"youtube#video",
      "videoId":"CHzlSGRvWPs"},
    "snippet":{
      "publishedAt":"2017-03-08T22:41:43Z",
      "channelId":"UCUsm-fannqOY02PNN67C0KA",
      "title":"Wizeline",
      "description":"El plan de Wizeline, una empresa de inteligencia artificial, para ayudar a crecer la comunidad de ciencia de datos en CDMX y todo el país, a través de cursos ...",
      "thumbnails":{
        "default":{
          "url":"https://i.ytimg.com/vi/CHzlSGRvWPs/default.jpg",
          "width":120,
          "height":90},
        "medium":{
          "url":"https://i.ytimg.com/vi/CHzlSGRvWPs/mqdefault.jpg",
          "width":320,
          "height":180},
        "high":{
          "url":"https://i.ytimg.com/vi/CHzlSGRvWPs/hqdefault.jpg",
          "width":480,
          "height":360}},
      "channelTitle":"Noticieros Televisa",
      "liveBroadcastContent":"none",
      "publishTime":"2017-03-08T22:41:43Z"}},
    {
    "kind":"youtube#searchResult",
    "etag":"4lmSnJ7SFZVf6HkqQJ9a6heTjSk",
    "id":{
      "kind":"youtube#video",
      "videoId":"cjO2fJy8asM"},
    "snippet":{
      "publishedAt":"2018-09-25T17:45:19Z",
      "channelId":"UCPGzT4wecuWM0BH9mPiulXg",
      "title":"A Day in the Life of an Engineering Manager at Wizeline",
      "description":"Fernando Espinoza shares his experience working as an engineering manager at Wizeline and mentoring other engineers. Learn about Fernando's passions ...",
      "thumbnails":{
        "default":{
          "url":"https://i.ytimg.com/vi/cjO2fJy8asM/default.jpg",
          "width":120,
          "height":90},
        "medium":{
          "url":"https://i.ytimg.com/vi/cjO2fJy8asM/mqdefault.jpg",
          "width":320,
          "height":180},
        "high":{
          "url":"https://i.ytimg.com/vi/cjO2fJy8asM/hqdefault.jpg",
          "width":480,
          "height":360}},
      "channelTitle":"Wizeline",
      "liveBroadcastContent":"none",
      "publishTime":"2018-09-25T17:45:19Z"}
      }] ;

describe("Video List", () => {
  it("displays video grid", () => {
    render(<VideoList 
        videos={videoListProps}
        format="grid-video" />);

    expect(screen.getAllByRole("listitem").length).toBe(5);
  });

  it("displays video list", () => {
    render(<VideoList 
        videos={videoListProps}
        format="list-video" />);

    expect(screen.getAllByRole("listitem").length).toBe(5);
  });
});



