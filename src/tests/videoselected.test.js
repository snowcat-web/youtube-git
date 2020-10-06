import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import VideoSelected from '../components/Video/VideoSelected';
import VideoListItem from '../components/Video/VideoListItem';
import VideoGridItem from '../components/Video/VideoGridItem';
import { favoritePresent } from '../components/Video/VideoUtils';
jest.mock('../components/Video/VideoUtils'); 

const videoListProps = {
    "kind":"youtube#searchResult",
    "etag":"Jiak50jVoJ9_Uscl6Dwcb7VySqI",
    "id":{
      "kind":"youtube#video",
      "videoId":"nmXMgqjQzls"},
    "snippet":{
      "publishedAt":"2019-09-30T23:54:32Z",
      "channelId":"UCPGzT4wecuWM0BH9mPiulXg",
      "title":"Title Testing",
      "description":"Description Testing",
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
      "publishTime":"2019-09-30T23:54:32Z"}
          } ;


describe('Video Selected', () => {
  it('displays loading', () => {
    render(<VideoSelected video={null} />);
    expect(screen.getByText('Loading...')).toBeTruthy();
  });

  it('displays video selected', () => {
    render(<VideoSelected video={videoListProps} />);

    expect(screen.getByText('Title Testing')).toBeTruthy();
    expect(screen.getByText('Description Testing')).toBeTruthy();
  });
});

describe('Video displayed in grid', () => {
  it('displays video item list individually', () => {
    render(<VideoListItem video={videoListProps} />);

    expect(screen.getByText('Title Testing')).toBeTruthy();
  });
  it('displays video item grid individually', () => {
    render(<VideoGridItem video={videoListProps} />);

    expect(screen.getByText('Title Testing')).toBeTruthy();
  });
});

describe('Displayed favorite button', () => {
  it('displays favorite button when logged', () => {
    render(<VideoSelected video={videoListProps} logged={true} />);

    expect(screen.getByText('Add to favorites')).toBeTruthy();
    expect(screen.queryAllByRole('button').length).toBe(1);
  });

  it('hides favorite button when not logged', () => {
    render(<VideoSelected video={videoListProps} />);

    expect(screen.queryByText('Add to favorites')).toBeFalsy();
  });

  it('add favorite video action', () => {
    const addFavorite = jest.fn();
    render(
      <VideoSelected video={videoListProps} logged={true} addFavorite={addFavorite} />
    );

    const button = screen.queryByRole('button');

    fireEvent.click(button);

    expect(addFavorite).toHaveBeenCalledTimes(1);
  });

  it('display add favorite button when video is not fav', () => {
    favoritePresent.mockImplementation(() => false);
    favoritePresent();

    render(<VideoSelected video={videoListProps} logged={true} />);

    expect(screen.getByText('Add to favorites')).toBeTruthy();
  });

  it('display remove favorite button when video is fav', () => {
    favoritePresent.mockImplementation(() => true);
    favoritePresent();

    render(<VideoSelected video={videoListProps} logged={true} />);

    expect(screen.getByText('Remove from favorites')).toBeTruthy();
  });
});