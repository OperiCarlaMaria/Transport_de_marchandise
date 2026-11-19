import { DocumentMission, Mission, Voyage } from '../models/models';

/** Écart = livré - prévu (0 tant que rien n'est livré). */
export function ecart(v: Voyage): number {
  return v.quantiteLivree == null ? 0 : v.quantiteLivree - v.quantitePrevue;
}

/** Raisons qui empêchent de clôturer une mission. Liste vide = clôture possible. */
export function blocagesCloture(
  m: Mission,
  voyages: Voyage[],
  docs: DocumentMission[]
): string[] {
  const raisons: string[] = [];
  if (!docs.some(d => d.missionId === m.id && d.type === 'Bon de livraison')) {
    raisons.push('Bon de livraison (BL) manquant');
  }
  if (voyages.some(v => ecart(v) !== 0 && !v.ecartValide)) {
    raisons.push('Écart de quantité non validé par le Manager');
  }
  if (!m.avisComptabilite) {
    raisons.push('Avis de la Comptabilité manquant');
  }
  if (voyages.length === 0 || voyages.some(v => v.statut !== 'Livré')) {
    raisons.push('Tous les voyages ne sont pas livrés');
  }
  return raisons;
}