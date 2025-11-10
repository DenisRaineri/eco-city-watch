import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Pressable,
  Switch,
} from 'react-native';
import {
  Bell,
  MapPin,
  Shield,
  Moon,
  Languages,
  CircleHelp as HelpCircle,
  ChevronRight,
} from 'lucide-react-native';
import React from 'react';

export default function SettingsScreen() {
  const sections = [
    {
      title: 'Preferências',
      items: [
        {
          id: 'notifications',
          title: 'Notificações',
          icon: Bell,
          type: 'switch',
          value: true,
        },
        {
          id: 'location',
          title: 'Serviços de Localização',
          icon: MapPin,
          type: 'switch',
          value: true,
        },
        {
          id: 'darkMode',
          title: 'Modo Escuro',
          icon: Moon,
          type: 'switch',
          value: false,
        },
      ],
    },
    {
      title: 'Aplicativo',
      items: [
        {
          id: 'language',
          title: 'Idioma',
          icon: Languages,
          type: 'link',
          value: 'Português',
        },
        {
          id: 'privacy',
          title: 'Privacidade e Segurança',
          icon: Shield,
          type: 'link',
        },
        {
          id: 'help',
          title: 'Ajuda e Suporte',
          icon: HelpCircle,
          type: 'link',
        },
      ],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Configurações</Text>
        <Text style={styles.subtitle}>Personalize sua experiência</Text>
      </View>

      {sections.map((section) => (
        <View key={section.title} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.title}</Text>

          <View style={styles.sectionContent}>
            {section.items.map((item) => {
              const Icon = item.icon;

              return (
                <Pressable key={item.id} style={styles.settingItem}>
                  <View style={styles.settingItemLeft}>
                    <View style={styles.iconContainer}>
                      <Icon size={20} color="#6b7280" />
                    </View>
                    <Text style={styles.settingItemTitle}>{item.title}</Text>
                  </View>

                  {item.type === 'switch' ? (
                    <Switch
                      value={item.value}
                      onValueChange={() => {}}
                      trackColor={{ false: '#d1d5db', true: '#10b981' }}
                    />
                  ) : (
                    <View style={styles.settingItemRight}>
                      {item.value && (
                        <Text style={styles.settingItemValue}>
                          {item.value}
                        </Text>
                      )}
                      <ChevronRight size={20} color="#6b7280" />
                    </View>
                  )}
                </Pressable>
              );
            })}
          </View>
        </View>
      ))}

      <View style={styles.footer}>
        <Text style={styles.version}>Versão 1.0.0</Text>
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
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6b7280',
    marginLeft: 16,
    marginBottom: 8,
  },
  sectionContent: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e5e5e5',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  settingItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  settingItemTitle: {
    fontSize: 16,
    color: '#111827',
  },
  settingItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingItemValue: {
    fontSize: 14,
    color: '#6b7280',
    marginRight: 8,
  },
  footer: {
    padding: 24,
    alignItems: 'center',
  },
  version: {
    fontSize: 14,
    color: '#6b7280',
  },
});
