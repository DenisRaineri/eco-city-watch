import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import {
  Wind,
  Droplet,
  Trees as Tree,
  ThermometerSun,
  Bus,
  TriangleAlert as AlertTriangle,
} from 'lucide-react-native';
import React from 'react';

export default function Dashboard() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>EcoCity Watch</Text>
        <Text style={styles.subtitle}>Monitor Ambiental Urbano</Text>
      </View>

      <View style={styles.grid}>
        <Pressable style={styles.card}>
          <Wind size={32} color="#10b981" />
          <Text style={styles.cardTitle}>Qualidade do Ar</Text>
          <Text style={styles.cardValue}>Boa</Text>
        </Pressable>

        <Pressable style={styles.card}>
          <Bus size={32} color="#6366f1" />
          <Text style={styles.cardTitle}>Tráfego</Text>
          <Text style={styles.cardValue}>Moderado</Text>
        </Pressable>

        <Pressable style={styles.card}>
          <Droplet size={32} color="#3b82f6" />
          <Text style={styles.cardTitle}>Risco de Enchente</Text>
          <Text style={styles.cardValue}>Baixo</Text>
        </Pressable>

        <Pressable style={styles.card}>
          <Tree size={32} color="#059669" />
          <Text style={styles.cardTitle}>Desmatamento</Text>
          <Text style={styles.cardValue}>3 Relatórios</Text>
        </Pressable>

        <Pressable style={styles.card}>
          <AlertTriangle size={32} color="#f59e0b" />
          <Text style={styles.cardTitle}>Fontes de Água</Text>
          <Text style={styles.cardValue}>2 Alertas</Text>
        </Pressable>

        <Pressable style={styles.card}>
          <ThermometerSun size={32} color="#dc2626" />
          <Text style={styles.cardTitle}>Temperatura</Text>
          <Text style={styles.cardValue}>28°C</Text>
        </Pressable>
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>Minha localização</Text>
        <Text style={styles.subtitle}>
          Informações obtidas via Google Maps API
        </Text>
        <Text style={styles.subtitle}>Latitude: -23.576620</Text>
        <Text style={styles.subtitle}>Longitude: -46.640500,</Text>
        <Text style={styles.subtitle}>
          Endereço: Vila Mariana - São Paulo, SP
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    marginTop: 4,
  },
  grid: {
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    width: '47%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
    marginTop: 12,
  },
  cardValue: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
});
