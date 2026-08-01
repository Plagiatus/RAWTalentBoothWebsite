import type { University } from "../types";
import type { Sponsor } from "../types";
import type { VIP } from "../types";
import cglLogo from "$lib/assets/logos/unis/cgl_th_koeln.svg";
import ethLogo from "$lib/assets/logos/unis/eth_zuerich.svg";
import fabwLogo from "$lib/assets/logos/unis/fabw.svg";
import fhmsLogo from "$lib/assets/logos/unis/fhms.svg";
import hdmLogo from "$lib/assets/logos/unis/hdm_stuttgart.svg";
import hhnLogo from "$lib/assets/logos/unis/hhn_heilbronn.svg";
import hdaLogo from "$lib/assets/logos/unis/hs_darmstadt.svg";
import hfuLogo from "$lib/assets/logos/unis/hs_furtwangen.svg";
import hsmwLogo from "$lib/assets/logos/unis/hs_mittweida.svg";
import hsnuLogo from "$lib/assets/logos/unis/hs_neu_ulm.png";
import nordLogo from "$lib/assets/logos/unis/nord_uni.svg";
import ruLogo from "$lib/assets/logos/unis/ru.png";
import thaLogo from "$lib/assets/logos/unis/th_augsburg.svg";
import tudLogo from "$lib/assets/logos/unis/tu_darmstadt.svg";
import tumLogo from "$lib/assets/logos/unis/tu_münchen.svg";
import ubaLogo from "$lib/assets/logos/unis/uni_bayreuth.svg";
import unsiLogo from "$lib/assets/logos/unis/uni_siegen.svg";
import utLogo from "$lib/assets/logos/unis/uni_tuebingen.svg";
import tugLogo from "$lib/assets/logos/unis/tu_graz.svg";

import mfgLogo from "$lib/assets/logos/mfgbw_logo.svg";
import fmnrwLogo from "$lib/assets/logos/fs_logo.png";
import ubavLogo from "$lib/assets/logos/unis/uni_bayreuth_verein.svg";
import vipImage01 from "$lib/assets/john_doe.png";
// Some of this stuff we should consider moving to the database, like the universities maybe?

export enum GameEngine {
    GODOT = "godot",
    UNREAL = "unreal",
    UNITY = "unity",
    RENPY = "renpy",
    GAMEMAKER = "gamemaker",
    RPGMAKER = "rpgmaker",
    CONSTRUCT = "construct",
    FUDGE = "fudge",
}

export const sponsors: Sponsor[] = [
    {
        url: "https://www.mfg.de/",
        id: "mfg",
        img: mfgLogo,
        name: "MFG Medien- und Filmgesellschaft Baden-Württemberg",
    }, {
        url: "https://www.filmstiftung.de/",
        id: "fmnrw",
        img: fmnrwLogo,
        name: "Film- und Medienstiftung NRW",
    }, {
        url: "https://www.univerein.uni-bayreuth.de/de/index.html",
        id: "ubav",
        img: ubavLogo,
        name: "Universitätsverein Bayreuth",
    },
]

export const vips: VIP[] = [
    {
        name: "Dr. Greta Hoffmann",
        position: "Team Lead",
        status: true,
        atRawtalent: 3,
        img: vipImage01,
        roleAtRawtalent: "Organizer",
    }, {
        name: "John Doe",
        position: "Game Developer",
        status: true,
        atRawtalent: 5,
        img: vipImage01,
        roleAtRawtalent: "Role at RAW",
    }, {
        name: "John Doe",
        position: "Game Developer",
        status: true,
        atRawtalent: 5,
        img: vipImage01,
        roleAtRawtalent: "Role at RAW",
    }, {
        name: "John Doe",
        position: "Game Developer",
        status: true,
        atRawtalent: 5,
        img: vipImage01,
        roleAtRawtalent: "Role at RAW",
    }, {
        name: "John Doe",
        position: "Game Developer",
        status: true,
        atRawtalent: 5,
        img: vipImage01,
        roleAtRawtalent: "Role at RAW",
    },
]

export const universities: University[] = [
    {
        url: "https://colognegamelab.de/",
        id: "cgl",
        img: cglLogo,
        name: "Cologne Game Lab, TH Köln",
    }, {
        url: "https://gtc.inf.ethz.ch/",
        id: "eth",
        img: ethLogo,
        name: "ETH Zürich",
    }, {
        url: "https://www.filmakademie.de/",
        id: "fabw",
        img: fabwLogo,
        name: "Filmakademie Baden-Württemberg",
    }, {
        url: "https://www.fh-muenster.de/",
        id: "fhms",
        img: fhmsLogo,
        name: "FH Münster",
    }, {
        url: "https://hdm-stuttgart.de/",
        id: "hdm",
        img: hdmLogo,
        name: "Hochschule der Medien Stuttgart",
    }, {
        url: "https://www.hs-heilbronn.de/",
        id: "hhn",
        img: hhnLogo,
        name: "Hochschule Heilbronn",
    }, {
        url: "https://h-da.de/",
        id: "hda",
        img: hdaLogo,
        name: "Hochschule Darmstadt",
    }, {
        url: "https://hs-furtwangen.de",
        id: "hfu",
        img: hfuLogo,
        name: "Hochschule Furtwangen",
    }, {
        url: "https://www.hs-mittweida.de/",
        id: "hsmw",
        img: hsmwLogo,
        name: "Hochschule Mittweida",
    }, {
        url: "https://www.hnu.de/",
        id: "hsnu",
        img: hsnuLogo,
        name: "Hochschule Neu-Ulm",
    }, {
        url: "https://nord.no/",
        id: "nord",
        img: nordLogo,
        name: "Nord Universitet",
    }, {
        url: "https://www.ru.is/",
        id: "ru",
        img: ruLogo,
        name: "Reykjavik University",
    }, {
        url: "https://www.tha.de/",
        id: "tha",
        img: thaLogo,
        name: "TH Augsburg",
    }, {
        url: "https://www.tu-darmstadt.de/",
        id: "tud",
        img: tudLogo,
        name: "TU Darmstadt",
    }, {
        url: "https://www.tum.de/",
        id: "tum",
        img: tumLogo,
        name: "TU München",
    }, {
        url: "https://www.uni-bayreuth.de/",
        id: "uba",
        img: ubaLogo,
        name: "Uni Bayreuth",
    }, {
        url: "https://www.uni-siegen.de/",
        id: "unsi",
        img: unsiLogo,
        name: "Uni Siegen",
    }, {
        url: "https://uni-tuebingen.de/",
        id: "ut",
        img: utLogo,
        name: "Uni Tübingen",
    }, {
        url: "https://www.tugraz.at",
        id: "tug",
        img: tugLogo,
        name: "TU Graz",
    },
]

export const tags: Map<string, string[]> = new Map<string, string[]>([
    ["Player Amount", ["singleplayer", "multiplayer"]],
    ["Platforms", ["steam", "itch", "mobile", "epic"]],
    ["Monetization", ["free2play", "pay2play", "demo"]],
    ["Gameplay", ["co-op", "competitve", "casual/party"]],
    ["Category", ["shooter", "platform", "simulation", "strategy", "roguelike", "puzzle", "rpg", "romance", "story driven", "gambling", "incremental", "metroidvania", "cozy", "sport"]],
    ["Style", ["horror", "pixel", "fantasy", "sci-fi", "realistic", "cartoon"]],
])