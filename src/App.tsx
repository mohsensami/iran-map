import { IranMap } from './lib/IranMap';

function App() {
    const mapData = {
        ardabil: 16,
        isfahan: 20,
        alborz: 11,
        ilam: 14,
        eastAzerbaijan: 10,
        westAzerbaijan: 20,
        bushehr: 15,
        tehran: 35,
        chaharmahalandBakhtiari: 6,
        southKhorasan: 19,
        razaviKhorasan: 11,
        northKhorasan: 19,
        khuzestan: 12,
        zanjan: 12,
        semnan: 9,
        sistanAndBaluchestan: 3,
        fars: 7,
        qazvin: 25,
        qom: 22,
        kurdistan: 24,
        kerman: 23,
        kohgiluyehAndBoyerAhmad: 20,
        kermanshah: 7,
        golestan: 18,
        gilan: 14,
        lorestan: 7,
        mazandaran: 18,
        markazi: 25,
        hormozgan: 6,
        hamadan: 19,
        yazd: 14,
    };
    return (
        <>
            <IranMap data={mapData} seaBg="#2196f3" />
        </>
    );
}

export default App;
