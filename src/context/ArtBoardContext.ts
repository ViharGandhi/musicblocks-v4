import { createContext } from 'react';

// -- types ----------------------------------------------------------------------------------------

import { IArtBoardContext } from '@/@types/context';
import { IArtboardModel } from '@/@types/artboard';

// -- defaults -------------------------------------------------------------------------------------

/**
 * Default values for the top-level configurations context.
 */
const ArtBoardList: IArtboardModel[] = [];

export const ContextDefaultArtBoard: IArtBoardContext = {
    artBoardList: ArtBoardList,
    setArtBoardList: (artBoardList) => artBoardList,
    numberOfArtboards: 0,
};

// -- instance -------------------------------------------------------------------------------------

export const ArtBoardContext = createContext<IArtBoardContext>(ContextDefaultArtBoard);
