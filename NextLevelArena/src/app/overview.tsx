import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import NextLevelLogo from '../../assets/images/Next_Level_Gaming_Esports_Logo.svg';

const PACKAGES = [
  {
    id: 'ultimate',
    name: 'Ultimate Gamer Pass',
    category: 'GAMING',
    description:
      'A complete gaming experience for players looking to enjoy a variety of gaming activities at Next Level.',
    icon: 'game-controller-outline' as const,
  },
  {
    id: 'vip',
    name: 'VIP Gaming Experience',
    category: 'GAMING',
    description:
      'A premium gaming experience designed for customers who want an enhanced and exclusive session.',
    icon: 'diamond-outline' as const,
  },
  {
    id: 'esports',
    name: 'Esports Training Package',
    category: 'ESPORTS',
    description:
      'A competitive training experience designed for players who want to improve their esports skills.',
    icon: 'trophy-outline' as const,
  },
  {
    id: 'birthday',
    name: 'Birthday Party Package',
    category: 'EVENTS',
    description:
      'A gaming-focused party experience suitable for birthdays and group celebrations.',
    icon: 'gift-outline' as const,
  },
];

const EXPERIENCES = [
  {
    id: 'vr',
    name: 'Virtual Reality Experience',
    category: 'VR',
    description:
      'Step into an immersive virtual world using modern VR technology.',
    icon: 'sparkles-outline' as const,
  },
  {
    id: 'racing',
    name: 'Racing Simulator Challenge',
    category: 'RACING',
    description:
      'Experience competitive racing with an immersive racing simulator.',
    icon: 'speedometer-outline' as const,
  },
  {
    id: 'escape',
    name: 'Escape Room Challenge',
    category: 'CHALLENGE',
    description:
      'Work together, solve clues and complete challenges before time runs out.',
    icon: 'key-outline' as const,
  },
];

export default function Overview() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <Pressable
            style={styles.backButton}
            onPress={() => {
              if (router.canGoBack()) {
                router.back();
              } else {
                router.replace('/');
              }
            }}
          >
            <Ionicons
              name="arrow-back"
              size={24}
              color="#FFFFFF"
            />
          </Pressable>

          <NextLevelLogo
            width={150}
            height={65}
          />

          <Pressable
            style={styles.menuButton}
            onPress={() => router.push('/about')}
          >
            <Ionicons
              name="menu-outline"
              size={27}
              color="#FFFFFF"
            />
          </Pressable>
        </View>

        {/* TITLE */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>OUR PACKAGES</Text>

          <View style={styles.titleLine} />

          <Text style={styles.subtitle}>
            Choose from our gaming packages and individual experiences.
          </Text>
        </View>

        {/* PACKAGES */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            GAMING PACKAGES
          </Text>
        </View>

        {PACKAGES.map((item) => (
          <View
            key={item.id}
            style={styles.packageCard}
          >
            <View style={styles.iconBox}>
              <Ionicons
                name={item.icon}
                size={30}
                color="#A855F7"
              />
            </View>

            <View style={styles.cardContent}>
              <View style={styles.categoryBadge}>
                <Text style={styles.categoryText}>
                  {item.category}
                </Text>
              </View>

              <Text style={styles.packageName}>
                {item.name}
              </Text>

              <Text style={styles.description}>
                {item.description}
              </Text>

              <Pressable
                style={styles.detailsButton}
                onPress={() =>
                  router.push('/details')
                }
              >
                <Text style={styles.detailsButtonText}>
                  VIEW DETAILS
                </Text>

                <Ionicons
                  name="arrow-forward"
                  size={17}
                  color="#FFFFFF"
                />
              </Pressable>
            </View>
          </View>
        ))}

        {/* INDIVIDUAL EXPERIENCES */}
        <View style={styles.sectionHeaderExperience}>
          <Text style={styles.sectionTitle}>
            INDIVIDUAL EXPERIENCES
          </Text>
        </View>

        {EXPERIENCES.map((item) => (
          <View
            key={item.id}
            style={styles.experienceCard}
          >
            <View style={styles.experienceIcon}>
              <Ionicons
                name={item.icon}
                size={28}
                color="#00E5FF"
              />
            </View>

            <View style={styles.experienceContent}>
              <Text style={styles.experienceName}>
                {item.name}
              </Text>

              <Text style={styles.experienceDescription}>
                {item.description}
              </Text>

              <Pressable
                style={styles.experienceButton}
                onPress={() =>
                  router.push('/details')
                }
              >
                <Text style={styles.experienceButtonText}>
                  EXPLORE
                </Text>

                <Ionicons
                  name="chevron-forward"
                  size={16}
                  color="#00E5FF"
                />
              </Pressable>
            </View>
          </View>
        ))}

        {/* BOOKING CTA */}
        <View style={styles.ctaCard}>
          <Ionicons
            name="calendar-outline"
            size={36}
            color="#A3FF12"
          />

          <Text style={styles.ctaTitle}>
            READY TO LEVEL UP?
          </Text>

          <Text style={styles.ctaText}>
            Select your experiences and calculate your booking fees.
          </Text>

          <Pressable
            style={styles.ctaButton}
            onPress={() =>
              router.push('/calculate-fees')
            }
          >
            <Text style={styles.ctaButtonText}>
              CALCULATE FEES
            </Text>

            <Ionicons
              name="arrow-forward"
              size={19}
              color="#0B0F2E"
            />
          </Pressable>
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <NextLevelLogo
            width={135}
            height={55}
          />

          <Text style={styles.footerTagline}>
            PLAY • COMPETE • LEVEL UP
          </Text>

          <View style={styles.socialRow}>
            <Ionicons
              name="logo-instagram"
              size={20}
              color="#FFFFFF"
            />

            <Ionicons
              name="logo-facebook"
              size={20}
              color="#FFFFFF"
            />

            <Ionicons
              name="logo-tiktok"
              size={20}
              color="#FFFFFF"
            />
          </View>

          <Text style={styles.copyright}>
            © 2026 Next Level Gaming & Esports Arena
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0B0F2E',
  },

  container: {
    flex: 1,
    backgroundColor: '#0B0F2E',
  },

  content: {
    paddingBottom: 40,
  },

  header: {
    height: 85,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#242850',
  },

  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#171B42',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#343A70',
  },

  menuButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#171B42',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#343A70',
  },

  titleSection: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: 1,
  },

  titleLine: {
    width: 60,
    height: 4,
    backgroundColor: '#A855F7',
    borderRadius: 2,
    marginTop: 10,
    marginBottom: 12,
  },

  subtitle: {
    color: '#A9AEC9',
    fontSize: 14,
    lineHeight: 21,
  },

  sectionHeader: {
    paddingHorizontal: 20,
    marginBottom: 12,
  },

  sectionHeaderExperience: {
    paddingHorizontal: 20,
    marginTop: 18,
    marginBottom: 12,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 0.5,
  },

  packageCard: {
    marginHorizontal: 20,
    marginBottom: 14,
    padding: 16,
    backgroundColor: '#111638',
    borderRadius: 17,
    borderWidth: 1,
    borderColor: '#292F5A',
    flexDirection: 'row',
  },

  iconBox: {
    width: 58,
    height: 58,
    borderRadius: 14,
    backgroundColor: '#1B1742',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
  },

  cardContent: {
    flex: 1,
  },

  categoryBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#25204C',
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 7,
  },

  categoryText: {
    color: '#A855F7',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 0.8,
  },

  packageName: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '900',
    marginBottom: 6,
  },

  description: {
    color: '#969CB9',
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 12,
  },

  detailsButton: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    backgroundColor: '#A855F7',
    paddingHorizontal: 13,
    paddingVertical: 9,
    borderRadius: 8,
  },

  detailsButtonText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '900',
  },

  experienceCard: {
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 15,
    backgroundColor: '#101532',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#292F5A',
    flexDirection: 'row',
  },

  experienceIcon: {
    width: 50,
    height: 50,
    borderRadius: 13,
    backgroundColor: '#102D3A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
  },

  experienceContent: {
    flex: 1,
  },

  experienceName: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
    marginBottom: 5,
  },

  experienceDescription: {
    color: '#8F95B2',
    fontSize: 12,
    lineHeight: 17,
    marginBottom: 8,
  },

  experienceButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 5,
  },

  experienceButtonText: {
    color: '#00E5FF',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.5,
  },

  ctaCard: {
    marginHorizontal: 20,
    marginTop: 25,
    padding: 22,
    borderRadius: 20,
    backgroundColor: '#17133A',
    borderWidth: 1,
    borderColor: '#4A3470',
    alignItems: 'center',
  },

  ctaTitle: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '900',
    marginTop: 10,
  },

  ctaText: {
    color: '#A1A6C2',
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'center',
    marginTop: 7,
    marginBottom: 17,
  },

  ctaButton: {
    minWidth: 190,
    height: 48,
    borderRadius: 11,
    backgroundColor: '#A3FF12',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  ctaButtonText: {
    color: '#0B0F2E',
    fontSize: 12,
    fontWeight: '900',
  },

  footer: {
    alignItems: 'center',
    marginTop: 45,
    paddingTop: 25,
    borderTopWidth: 1,
    borderTopColor: '#242850',
  },

  footerTagline: {
    color: '#777D9F',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    marginTop: 5,
  },

  socialRow: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 18,
  },

  copyright: {
    color: '#5F6483',
    fontSize: 10,
    marginTop: 15,
  },
});