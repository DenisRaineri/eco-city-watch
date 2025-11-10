import { View, StyleSheet, Text, ScrollView, Pressable } from 'react-native';
import {
  TriangleAlert as AlertTriangle,
  ChevronRight,
} from 'lucide-react-native';
import React from 'react';

export default function ReportsScreen() {
  const reports = [
    {
      id: 1,
      title: 'Alerta de Alta Poluição do Ar',
      location: 'Região Central',
      timestamp: '2025-04-16T10:30:00Z',
      severity: 'high',
      status: 'active',
    },
    {
      id: 2,
      title: 'Contaminação de Fonte de Água',
      location: 'Parque do Ibirapuera',
      timestamp: '2025-04-16T09:15:00Z',
      severity: 'medium',
      status: 'investigating',
    },
    {
      id: 3,
      title: 'Atividade de Desmatamento',
      location: 'Reserva Norte',
      timestamp: '2025-04-16T08:45:00Z',
      severity: 'high',
      status: 'resolved',
    },
  ];

  const getSeverityColor = (severity: string) => {
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

  const getStatusBadge = (status: string) => {
    const badges = {
      active: { bg: '#fee2e2', text: '#ef4444', label: 'Ativo' },
      investigating: { bg: '#fef3c7', text: '#f59e0b', label: 'Investigando' },
      resolved: { bg: '#d1fae5', text: '#10b981', label: 'Resolvido' },
    };
    return (
      badges[status as keyof typeof badges] || {
        bg: '#f3f4f6',
        text: '#6b7280',
        label: status,
      }
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Relatórios Ambientais</Text>
        <Text style={styles.subtitle}>Incidentes e alertas recentes</Text>
      </View>

      <View style={styles.list}>
        {reports.map((report) => (
          <Pressable key={report.id} style={styles.reportCard}>
            <View style={styles.reportHeader}>
              <View
                style={[
                  styles.severityIndicator,
                  { backgroundColor: getSeverityColor(report.severity) },
                ]}
              >
                <AlertTriangle size={16} color="#fff" />
              </View>
              <View style={styles.reportInfo}>
                <Text style={styles.reportTitle}>{report.title}</Text>
                <Text style={styles.reportLocation}>{report.location}</Text>
              </View>
              <ChevronRight size={20} color="#6b7280" />
            </View>

            <View style={styles.reportFooter}>
              <Text style={styles.timestamp}>
                {new Date(report.timestamp).toLocaleString('pt-BR')}
              </Text>
              <View
                style={[
                  styles.statusBadge,
                  { backgroundColor: getStatusBadge(report.status).bg },
                ]}
              >
                <Text
                  style={[
                    styles.statusText,
                    { color: getStatusBadge(report.status).text },
                  ]}
                >
                  {getStatusBadge(report.status).label}
                </Text>
              </View>
            </View>
          </Pressable>
        ))}
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
  list: {
    padding: 16,
  },
  reportCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  reportHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  severityIndicator: {
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reportInfo: {
    flex: 1,
    marginLeft: 12,
  },
  reportTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  reportLocation: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 2,
  },
  reportFooter: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timestamp: {
    fontSize: 14,
    color: '#6b7280',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
});
