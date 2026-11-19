export type Role = 'Exploitation' | 'Manager' | 'Comptabilite' | 'Direction' | 'Admin';
export type StatutMission = 'Créée' | 'Affectée' | 'En cours' | 'Clôturée' | 'Annulée';
export type StatutVoyage = 'À planifier' | 'Chargement en cours' | 'En route' | 'Livré' | 'À vérifier';
export type TypeDocument = 'Bon de commande' | 'Bon de chargement' | 'Bon de livraison' | 'Justificatif' | 'Photo';

export interface Utilisateur {
  id: number;
  nom: string;
  email: string;
  role: Role;
  actif: boolean;
}

export interface Mission {
  id: number;
  reference: string;
  client: string;
  marchandise: string;
  lieuChargement: string;
  lieuLivraison: string;
  dateDebut: string;
  dateFin: string;
  quantitePrevue: number;
  unite: string;
  statut: StatutMission;
  avisComptabilite: boolean;
  dateCloture?: string;
}

export interface Voyage {
  id: number;
  missionId: number;
  numero: number;
  camion: string;
  chauffeur: string;
  statut: StatutVoyage;
  dateDepart?: string;
  dateArrivee?: string;
  quantitePrevue: number;
  quantiteChargee?: number;
  quantiteLivree?: number;
  avanceFrais?: number;
  avanceCarburant?: number;
  ecartValide: boolean;
  observations?: string;
}

export interface DocumentMission {
  id: number;
  missionId: number;
  voyageId?: number;
  type: TypeDocument;
  nomFichier: string;
  dateReception: string;
  obligatoire: boolean;
}