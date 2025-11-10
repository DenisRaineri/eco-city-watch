import {
  View,
  StyleSheet,
  Text,
  Platform,
  Modal,
  Pressable,
} from 'react-native';
import {
  AlertTriangle as AlertTriangle,
  Droplet,
  Wind,
  Plus,
  X,
} from 'lucide-react-native';
import { useState } from 'react';
import React from 'react';

// Define types for map components
type MapViewType = any;
type MarkerType = any;
type CalloutType = any;

// Only import MapView on non-web platforms
let MapView: MapViewType;
let Marker: MarkerType;
let Callout: CalloutType;

if (Platform.OS !== 'web') {
  try {
    const Maps = require('react-native-maps');
    MapView = Maps.default;
    Marker = Maps.Marker;
    Callout = Maps.Callout;
  } catch (error) {
    console.warn('Failed to load react-native-maps:', error);
  }
}

export default function MapScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const incidents = [
    {
      id: 1,
      type: 'air',
      title: 'Alta Poluição do Ar',
      description: 'Níveis de PM2.5 acima do limite',
      coordinate: { latitude: -23.5882, longitude: -46.6393 },
      severity: 'high',
    },
    {
      id: 2,
      type: 'water',
      title: 'Alerta de Fonte de Água',
      description: 'Possível contaminação detectada',
      coordinate: { latitude: -23.5872, longitude: -46.6383 },
      severity: 'medium',
    },
    {
      id: 3,
      type: 'flood',
      title: 'Zona de Risco de Enchente',
      description: 'Área propensa a alagamentos',
      coordinate: { latitude: -23.5892, longitude: -46.6373 },
      severity: 'low',
    },
  ];

  const getMarkerColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return '#ef4444';
      case 'medium':
        return '#f59e0b';
      case 'low':
        return '#10b981';
      default:
        return '#6b7280';
    }
  };

  const getMarkerIcon = (type: string) => {
    switch (type) {
      case 'air':
        return <Wind size={24} color="#fff" />;
      case 'water':
        return <Droplet size={24} color="#fff" />;
      case 'flood':
        return <AlertTriangle size={24} color="#fff" />;
      default:
        return null;
    }
  };

  const handleMapPress = (event: any) => {
    const { coordinate } = event.nativeEvent;
    setSelectedLocation(coordinate);
    setModalVisible(true);
  };

  if (Platform.OS === 'web') {
    return (
      <View style={[styles.container, styles.webFallback]}>
        <Text style={styles.webTitle}>Visualização do Mapa Indisponível</Text>
        <Text style={styles.webDescription}>
          O mapa interativo está disponível apenas em dispositivos móveis.
        </Text>
        <View style={styles.incidentsList}>
          <Text style={styles.incidentsTitle}>Incidentes Atuais:</Text>
          {incidents.map((incident) => (
            <View
              key={incident.id}
              style={[
                styles.incidentItem,
                { borderLeftColor: getMarkerColor(incident.severity) },
              ]}
            >
              <View style={styles.incidentHeader}>
                {getMarkerIcon(incident.type)}
                <Text style={styles.incidentTitle}>{incident.title}</Text>
              </View>
              <Text style={styles.incidentDescription}>
                {incident.description}
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
  }

  if (!MapView) {
    return (
      <View style={[styles.container, styles.webFallback]}>
        <Text style={styles.webTitle}>Visualização do Mapa Indisponível</Text>
        <Text style={styles.webDescription}>
          Não foi possível carregar o componente do mapa. Por favor, tente
          novamente mais tarde.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.5882,
          longitude: -46.6393,
          latitudeDelta: 0.0122,
          longitudeDelta: 0.0121,
        }}
        onPress={handleMapPress}
      >
        {incidents.map((incident) => (
          <Marker key={incident.id} coordinate={incident.coordinate}>
            <View
              style={[
                styles.markerContainer,
                { backgroundColor: getMarkerColor(incident.severity) },
              ]}
            >
              {getMarkerIcon(incident.type)}
            </View>
            <Callout>
              <View style={styles.callout}>
                <Text style={styles.calloutTitle}>{incident.title}</Text>
                <Text style={styles.calloutDescription}>
                  {incident.description}
                </Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Reportar Incidente</Text>
              <Pressable
                onPress={() => setModalVisible(false)}
                style={styles.closeButton}
              >
                <X size={24} color="#6b7280" />
              </Pressable>
            </View>

            <Text style={styles.locationText}>
              Localização selecionada:{'\n'}
              Latitude: {selectedLocation?.latitude.toFixed(4)}
              {'\n'}
              Longitude: {selectedLocation?.longitude.toFixed(4)}
            </Text>

            <View style={styles.reportTypes}>
              <Pressable style={styles.reportTypeButton}>
                <Wind size={24} color="#10b981" />
                <Text style={styles.reportTypeText}>Poluição do Ar</Text>
              </Pressable>

              <Pressable style={styles.reportTypeButton}>
                <Droplet size={24} color="#3b82f6" />
                <Text style={styles.reportTypeText}>Problema com Água</Text>
              </Pressable>

              <Pressable style={styles.reportTypeButton}>
                <AlertTriangle size={24} color="#f59e0b" />
                <Text style={styles.reportTypeText}>Outros Problemas</Text>
              </Pressable>
            </View>

            <Pressable style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Enviar Relatório</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  markerContainer: {
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  callout: {
    padding: 8,
    minWidth: 150,
  },
  calloutTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  calloutDescription: {
    fontSize: 14,
    color: '#666',
  },
  webFallback: {
    padding: 20,
    alignItems: 'center',
  },
  webTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
  },
  webDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
  },
  incidentsList: {
    width: '100%',
    maxWidth: 600,
  },
  incidentsTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  incidentItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  incidentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  incidentTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  incidentDescription: {
    fontSize: 14,
    color: '#666',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    minHeight: '50%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
  },
  closeButton: {
    padding: 4,
  },
  locationText: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 20,
  },
  reportTypes: {
    gap: 12,
    marginBottom: 20,
  },
  reportTypeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e5e5',
  },
  reportTypeText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#374151',
  },
  submitButton: {
    backgroundColor: '#10b981',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
