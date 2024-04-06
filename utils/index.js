export function generateNearbyCoordinates(baseCoordinates, distance) {
  // Convert latitude and longitude from degrees to radians
  const lat1 = (baseCoordinates.latitude * Math.PI) / 180;
  const lon1 = (baseCoordinates.longitude * Math.PI) / 180;

  // Earth's radius in kilometers
  const R = 6371;

  // Generate random distances (in kilometers) between 0 and 'distance' for latitude and longitude
  const dLat = Math.random() * distance * 2 - distance;
  const dLon = Math.random() * distance * 2 - distance;

  // Calculate new latitude and longitude
  const lat2 = lat1 + dLat / R;
  const lon2 = lon1 + dLon / (R * Math.cos(lat1));

  // Convert latitude and longitude back to degrees
  const newLatitude = (lat2 * 180) / Math.PI;
  const newLongitude = (lon2 * 180) / Math.PI;

  return { latitude: newLatitude, longitude: newLongitude };
}
