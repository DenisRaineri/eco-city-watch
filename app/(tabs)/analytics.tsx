import { View, StyleSheet, Text, ScrollView, Dimensions } from 'react-native';
import { Wind, Droplet, ThermometerSun, Bus } from 'lucide-react-native';
import React from 'react';

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2;

export default function AnalyticsScreen() {
  const metrics = [
    {
      id: 1,
      title: 'Qualidade do Ar',
      value: '85',
      unit: 'AQI',
      trend: '+5%',
      isGood: false,
      icon: Wind,
      color: '#ef4444',
    },
    {
      id: 2,
      title: 'Qualidade da Água',
      value: '92',
      unit: 'WQI',
      trend: '-2%',
      isGood: true,
      icon: Droplet,
      color: '#3b82f6',
    },
    {
      id: 3,
      title: 'Temperatura',
      value: '28',
      unit: '°C',
      trend: '+3°C',
      isGood: false,
      icon: ThermometerSun,
      color: '#f59e0b',
    },
    {
      id: 4,
      title: 'Densidade do Tráfego',
      value: '65',
      unit: '%',
      trend: '-8%',
      isGood: true,
      icon: Bus,
      color: '#10b981',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Painel de Análise</Text>
        <Text style={styles.subtitle}>Métricas e tendências ambientais</Text>
      </View>

      <View style={styles.grid}>
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <View key={metric.id} style={styles.card}>
              <View
                style={[
                  styles.iconContainer,
                  { backgroundColor: metric.color },
                ]}
              >
                <Icon size={24} color="#fff" />
              </View>

              <Text style={styles.metricTitle}>{metric.title}</Text>

              <View style={styles.valueContainer}>
                <Text style={styles.value}>{metric.value}</Text>
                <Text style={styles.unit}>{metric.unit}</Text>
              </View>

              <View style={styles.trendContainer}>
                <Text
                  style={[
                    styles.trend,
                    { color: metric.isGood ? '#10b981' : '#ef4444' },
                  ]}
                >
                  {metric.trend}
                </Text>
                <Text style={styles.trendPeriod}>vs semana anterior</Text>
              </View>
            </View>
          );
        })}
      </View>

      <View style={styles.summaryContainer}>
        <Text style={styles.summaryTitle}>Resumo Semanal</Text>
        <Text style={styles.summaryText}>
          As condições ambientais mostram tendências mistas esta semana. As
          métricas de qualidade do ar e temperatura indicam aumento do estresse
          nos ambientes urbanos, enquanto a qualidade da água e a densidade do
          tráfego mostram melhorias.
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
    backgroundColor: '#fff',
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
    width: cardWidth,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  metricTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6b7280',
    marginBottom: 8,
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 8,
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  unit: {
    fontSize: 14,
    color: '#6b7280',
    marginLeft: 4,
  },
  trendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trend: {
    fontSize: 14,
    fontWeight: '500',
    marginRight: 4,
  },
  trendPeriod: {
    fontSize: 12,
    color: '#6b7280',
  },
  summaryContainer: {
    margin: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  summaryText: {
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 20,
  },
});
