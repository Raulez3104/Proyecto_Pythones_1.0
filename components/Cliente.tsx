import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

interface DashboardProps {
  navigation?: any;
}

const HistoryItem: React.FC<{
  title: string;
  date: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  color: string;
}> = ({ title, date, icon, color }) => (
  <TouchableOpacity style={styles.historyCard} activeOpacity={0.7}>
    <View style={[styles.historyIconContainer, { backgroundColor: `${color}15` }]}>
      <MaterialCommunityIcons name={icon} size={22} color={color} />
    </View>
    <View style={styles.historyTextContainer}>
      <Text style={styles.historyTitle}>{title}</Text>
      <Text style={styles.historySubtitle}>{date} • Finalizado</Text>
    </View>
    <Ionicons name="chevron-forward" size={18} color="#C7C7CC" />
  </TouchableOpacity>
);

const SuggestionCard: React.FC<{
  title: string;
  description: string;
  price: string;
  hasOfferBadge?: boolean;
  imageBgColor: string;
}> = ({ title, description, price, hasOfferBadge, imageBgColor }) => (
  <TouchableOpacity style={styles.suggestionCard} activeOpacity={0.9}>
    <View style={[styles.suggestionImagePlaceholder, { backgroundColor: imageBgColor }]}>
      {hasOfferBadge && (
        <View style={styles.offerBadge}>
          <Text style={styles.offerText}>Oferta</Text>
        </View>
      )}
    </View>

    <View style={styles.suggestionContent}>
      <Text style={styles.suggestionTitle}>{title}</Text>
      <Text style={styles.suggestionDescription} numberOfLines={2}>
        {description}
      </Text>

      <View style={styles.suggestionFooter}>
        <Text style={styles.suggestionPrice}>{price}</Text>
        <TouchableOpacity style={styles.cartButton}>
          <Ionicons name="cart" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  </TouchableOpacity>
);

const DashboardScreen: React.FC<DashboardProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <Image source={{ uri: 'https://i.pravatar.cc/150?u=maria' }} style={styles.avatar} />
            <View>
              <Text style={styles.welcomeText}>Bienvenido,</Text>
              <Text style={styles.userName}>Maistro Longaniza</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationBtn}>
            <Ionicons name="notifications-outline" size={24} color="#000" />
            <View style={styles.notificationDot} />
          </TouchableOpacity>
        </View>

        <View style={styles.blueCard}>
          <Text style={styles.blueCardTitle}>¿Necesitas ayuda técnica?</Text>
          <Text style={styles.blueCardSubtitle}>
            Programa una visita o solicita mantenimiento en segundos.
          </Text>
          <TouchableOpacity style={styles.createRequestBtn} activeOpacity={0.8}>
            <Ionicons name="add-circle" size={20} color="#0052cc" />
            <Text style={styles.createRequestText}>Crear Nueva Solicitud</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Trabajos en Curso</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>Ver todos</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScroll}>
          <View style={styles.workCard}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=400' }}
              style={styles.workImage}
            />
            <View style={styles.statusBadgeEnCamino}>
              <Text style={styles.statusTextEnCamino}>En Camino</Text>
            </View>
            <View style={styles.workInfoContainer}>
              <Text style={styles.workMainTitle}>Aire Acondicionado</Text>
              <Text style={styles.workSubTitle}>Reparación • Unidad principal</Text>
              <View style={styles.timeRow}>
                <Ionicons name="time-outline" size={16} color="#0052cc" />
                <Text style={styles.timeText}>Hoy, 14:00 - 16:00</Text>
              </View>
              <View style={styles.cardDivider} />
              <View style={styles.technicianRow}>
                <Image
                  source={{ uri: 'https://i.pravatar.cc/100?u=tech' }}
                  style={styles.techAvatar}
                />
                <Text style={styles.techName}>Juan P.</Text>
                <Ionicons
                  name="chevron-forward"
                  size={16}
                  color="#C7C7CC"
                  style={{ marginLeft: 'auto' }}
                />
              </View>
            </View>
          </View>

          <View style={styles.workCard}>
            <View style={styles.workImagePlaceholder} />
            <View style={styles.statusBadgeAsignando}>
              <Text style={styles.statusTextAsignando}>Asignando</Text>
            </View>
            <View style={styles.workInfoContainer}>
              <Text style={styles.workMainTitle}>Revisión Eléctrica</Text>
              <Text style={styles.workSubTitle}>Mantenimiento • Tablero</Text>
              <View style={styles.timeRow}>
                <Ionicons name="calendar-outline" size={16} color="#D97706" />
                <Text style={styles.timeText}>Pendiente de confirmar</Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <View style={[styles.sectionRow, { marginTop: 25 }]}>
          <Text style={styles.sectionTitle}>Sugerencias para ti</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>Ver tienda</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScroll}>
          <SuggestionCard
            title="Termostato Smart"
            description="Controla la temperatura de tu hogar desde tu móvil."
            price="$129.99"
            hasOfferBadge={true}
            imageBgColor="#80CBC4"
          />
          <SuggestionCard
            title="Pack Seguridad"
            description="Kit de 3 cámaras WiFi + movimiento."
            price="$249.00"
            hasOfferBadge={false}
            imageBgColor="#A5D6A7"
          />

          <SuggestionCard
            title="Sensor de Fugas"
            description="Detecta agua al instante."
            price="$49.99"
            hasOfferBadge={false}
            imageBgColor="#90CAF9"
          />
        </ScrollView>

        <View style={styles.historySection}>
          <Text style={styles.sectionTitle}>Historial Reciente</Text>
          <HistoryItem
            title="Mantenimiento Preventivo"
            date="12 Oct"
            icon="check-circle"
            color="#4CAF50"
          />
          <HistoryItem
            title="Instalación de Cámaras"
            date="05 Sep"
            icon="shield-check"
            color="#5C6BC0"
          />
          <HistoryItem title="Fuga de Agua" date="28 Ago" icon="wrench" color="#78909C" />
          <TouchableOpacity style={styles.fullHistoryBtn}>
            <Text style={styles.fullHistoryBtnText}>Ver historial completo</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FB' },
  scrollContent: { paddingBottom: 40 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 15,
    marginBottom: 20,
  },
  userInfo: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 44, height: 44, borderRadius: 22, marginRight: 12 },
  welcomeText: { fontSize: 13, color: '#8E8E93' },
  userName: { fontSize: 18, fontWeight: '700', color: '#1C1C1E' },
  notificationBtn: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#F2F2F7',
  },
  notificationDot: {
    position: 'absolute',
    top: 10,
    right: 11,
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#FF3B30',
    borderWidth: 1,
    borderColor: '#FFF',
  },
  blueCard: {
    backgroundColor: '#0052cc',
    marginHorizontal: 20,
    borderRadius: 24,
    padding: 24,
    marginBottom: 25,
  },
  blueCardTitle: { color: '#FFF', fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
  blueCardSubtitle: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 20,
  },
  createRequestBtn: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 14,
  },
  createRequestText: { color: '#0052cc', fontWeight: 'bold', fontSize: 15, marginLeft: 8 },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#1C1C1E' },
  seeAllText: { color: '#0052cc', fontWeight: '600', fontSize: 14 },
  horizontalScroll: { paddingLeft: 20, paddingBottom: 10 },
  workCard: {
    backgroundColor: '#FFF',
    width: width * 0.7,
    borderRadius: 20,
    marginRight: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#F2F2F7',
  },
  workImage: { width: '100%', height: 130 },
  workImagePlaceholder: { width: '100%', height: 130, backgroundColor: '#E5E5EA' },
  statusBadgeEnCamino: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#E8F1FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
  },
  statusTextEnCamino: { color: '#0052cc', fontSize: 12, fontWeight: '700' },
  statusBadgeAsignando: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#FFF9E5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
  },
  statusTextAsignando: { color: '#D97706', fontSize: 12, fontWeight: '700' },
  workInfoContainer: { padding: 16 },
  workMainTitle: { fontSize: 17, fontWeight: 'bold', color: '#1C1C1E', marginBottom: 4 },
  workSubTitle: { fontSize: 13, color: '#8E8E93', marginBottom: 14 },
  timeRow: { flexDirection: 'row', alignItems: 'center' },
  timeText: { fontSize: 13, color: '#1C1C1E', fontWeight: '600', marginLeft: 6 },
  cardDivider: { height: 1, backgroundColor: '#F2F2F7', marginVertical: 14 },
  technicianRow: { flexDirection: 'row', alignItems: 'center' },
  techAvatar: { width: 24, height: 24, borderRadius: 12, marginRight: 8 },
  techName: { fontSize: 14, color: '#3A3A3C' },
  historySection: { paddingHorizontal: 20, marginTop: 25 },
  historyCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#F2F2F7',
  },
  historyIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  historyTextContainer: { flex: 1, marginLeft: 15 },
  historyTitle: { fontSize: 15, fontWeight: '600', color: '#1C1C1E' },
  historySubtitle: { fontSize: 12, color: '#8E8E93', marginTop: 2 },
  fullHistoryBtn: { marginTop: 10, alignItems: 'center', paddingVertical: 10 },
  fullHistoryBtnText: { color: '#0052cc', fontWeight: 'bold', fontSize: 15 },

  suggestionCard: {
    backgroundColor: '#FFF',
    width: width * 0.55,
    borderRadius: 18,
    marginRight: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#F2F2F7',
  },
  suggestionImagePlaceholder: {
    width: '100%',
    height: 110,
  },
  offerBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#22C55E',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  offerText: { color: '#FFF', fontSize: 11, fontWeight: 'bold' },
  suggestionContent: { padding: 14 },
  suggestionTitle: { fontSize: 15, fontWeight: 'bold', color: '#1C1C1E', marginBottom: 4 },
  suggestionDescription: { fontSize: 12, color: '#8E8E93', marginBottom: 12, height: 32 }, // Altura fija para 2 lineas
  suggestionFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  suggestionPrice: { fontSize: 16, fontWeight: '800', color: '#1C1C1E' },
  cartButton: {
    backgroundColor: '#0052cc',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
