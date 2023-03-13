import {BsDownload, GrFormNextLink} from "react-icons/all";

export const noviceSection = {
    title: 'Vous êtes sur Minecraft ?',
    desc: 'Bienvenue ! Les primo-utilisateurs peuvent acheter le jeu pour tous les appareils pris en charge.',
    btnTitle: 'Obtenir Minecraft'
}

export const downloadSection = {
    title: 'Vous avez besoin d\'une autre version ?',
    desc: 'Aucun problème ! Voici diverses options de téléchargement :',
    dlLink: [
        {
            icon: BsDownload,
            text: 'TÉLÉCHARGER LE LAUNCHER POUR WINDOWS 7/8'
        },
        {
            icon: BsDownload,
            text: 'TÉLÉCHARGER LE LAUNCHER POUR MACOS'
        }
    ],
    osList: [
        {
            title: 'Mobile',
            data: [
                {
                    icon: BsDownload,
                    text: 'Android'
                },
                {
                    icon: BsDownload,
                    text: 'iOS'
                },
            ]
        },
        {
            title: 'Distributions Linux',
            data: [
                {
                    icon: BsDownload,
                    text: 'DEBIAN ET DISTRIBUTIONS BASÉES SUR DEBIAN'
                },
                {
                    icon: BsDownload,
                    text: 'ARCH ET DISTRIBUTIONS BASÉES SUR ARCH'
                },
                {
                    icon: BsDownload,
                    text: 'AUTRES DISTRIBUTIONS'
                }
            ]
        },
        {
            title: 'Logiciel et serveur',
            data: [
                {
                    icon: GrFormNextLink,
                    text: 'SERVEUR DE L\'ÉDITION JAVA'

                },
                {
                    icon: GrFormNextLink,
                    text: 'SERVEUR WINDOWS [ALPHA]'
                },
            ]
        },
    ]
}

export const heroSection = {
    title: 'Vous avez déjà  minecraft ?',
    subtitle: 'Téléchargez-le à nouveau',
    btnTitle: 'Télécharger le launcher pour windows 10/11',
    desc: 'Pour information, en téléchargeant l\'un des logiciels disponibles sur cette page, vous acceptez le contrat de licence d\'utilisateur final de Minecraft ainsi que sa politique de confidentialité.'
}