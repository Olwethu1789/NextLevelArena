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
    name: 'Ultimate Gamer Pass',
    category: 'GAMING PACKAGE',
    icon: 'game-controller-outline' as const,
    duration: '3 Hours',
    players: '1–4 Players',
    price: 'R450',
    description:
      'Enjoy the ultimate gaming session with access to a range of gaming activities at Next Level Gaming & Esports Arena.',
    features: [
      '3 hours of gaming',
      'Access to selected gaming stations',
      'High-performance gaming equipment',
      'Competitive gaming environment',
    ],
  },
  {
    name: 'VIP Gaming Experience',
    category: 'PREMIUM PACKAGE',
    icon: 'diamond-outline' as const,
    duration: '3 Hours',
    players: '1–4 Players',
    price: 'R650',
    description:
      'Take your gaming experience to the next level with a premium session designed for customers looking for an enhanced experience.',
    features: [
      '3 hours of premium gaming',
      'Priority gaming access',
      'Premium gaming equipment',
      'Exclusive gaming environment',
    ],
  },
  {
    name: 'Esports Training Package',
    category: 'ESPORTS PACKAGE',
    icon: 'trophy-outline' as const,
    duration: '2 Hours',
    players: '1–5 Players',
    price: 'R550',
    description:
      'Develop your competitive gaming skills through focused esports training and practice sessions.',
    features: [
      '2 hours of training',
      'Competitive gaming setup',
      'Practice and training sessions',
      'Suitable for esports players',
    ],
  },
  {
    name: 'Birthday Party Package',
    category: 'EVENT PACKAGE',
    icon: 'gift-outline' as const,
    duration: '3 Hours',
    players: 'Up to 10 Players',
    price: 'R850',
    description:
      'Celebrate your special day with an exciting gaming party experience designed for groups and birthday celebrations.',
    features: [
      '3 hours of gaming',
      'Group gaming activities',
      'Suitable for birthday celebrations',
      'Fun competitive environment',
    ],
  },
];

const EXPERIENCES = [
  {
    name: 'Virtual Reality Experience',
    category: 'VR EXPERIENCE',
    icon: 'sparkles-outline' as const,
    duration: '1 Hour',
    players: '1–2 Players',
    price: 'R300',
    description:
      'Enter an immersive virtual world and experience gaming from a completely different perspective.',
    features: [
      'Immersive VR experience',
      'Modern VR equipment',
      'Multiple virtual experiences',
      'Suitable for beginners and experienced players',
    ],
  },
  {
    name: 'Racing Simulator Challenge',
    category: 'RACING EXPERIENCE',
    icon: 'speedometer-outline' as const,
    duration: '1 Hour',
    players: '1–2 Players',
    price: 'R280',
    description:
      'Take control of a racing simulator and compete against the clock in an exciting driving challenge.',
    features: [
      'Immersive racing simulator',
      'Competitive racing experience',
      'Realistic driving setup',
      'Time-based challenges',
    ],
  },
  {
    name: 'Escape Room Challenge',
    category: 'CHALLENGE EXPERIENCE',
    icon: 'key-outline' as const,
    duration: '1 Hour',
    players: '2–6 Players',
    price: 'R350',
    description:
      'Work together, solve clues and complete challenging puzzles before the time runs out.',
    features: [
      'Team-based challenge',
      'Problem-solving activities',
      'Timed experience',
      'Suitable for groups',
    ],
  },
];

export default function PackageDetails() {
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
            style={styles.headerButton}
            onPress={() => {
              if (router.canGoBack()) {
                router.back();
              } else {
                router.replace('/');
              }
            }}
          >
            <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
          </Pressable>

          <NextLevelLogo width={150} height={65} />

          <Pressable
            style={styles.headerButton}
            onPress={() => router.push('/about')}
          >
            <Ionicons name="menu-outline" size={27} color="#FFFFFF" />
          </Pressable>
        </View>

        {/* TITLE */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>PACKAGE DETAILS</Text>

          <View style={styles.titleLine} />

          <Text style={styles.subtitle}>
            Explore our gaming packages and individual experiences before
            making your booking.
          </Text>
        </View>

        {/* GAMING PACKAGES */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>GAMING PACKAGES</Text>
        </View>

        {PACKAGES.map((item) => (
          <View key={item.name} style={styles.card}>
            <View style={styles.cardTop}>
              <View style={styles.iconBox}>
                <Ionicons name={item.icon} size={30} color="#A855F7" />
              </View>

              <View style={styles.headingArea}>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{item.category}</Text>
                </View>

                <Text style={styles.packageName}>{item.name}</Text>
              </View>
            </View>

            <Text style={styles.description}>{item.description}</Text>

            <View style={styles.infoRow}>
              <View style={styles.infoItem}>
                <Ionicons
                  name="time-outline"
                  size={18}
                  color="#00E5FF"
                />
                <Text style={styles.infoText}>{item.duration}</Text>
              </View>

              <View style={styles.infoItem}>
                <Ionicons
                  name="people-outline"
                  size={18}
                  color="#00E5FF"
                />
                <Text style={styles.infoText}>{item.players}</Text>
              </View>
            </View>

            <View style={styles.priceRow}>
              <View>
                <Text style={styles.priceLabel}>FROM</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>

              <Pressable
                style={styles.bookButton}
                onPress={() => router.push('/calculate-fees')}
              >
                <Text style={styles.bookButtonText}>BOOK NOW</Text>
                <Ionicons
                  name="arrow-forward"
                  size={17}
                  color="#FFFFFF"
                />
              </Pressable>
            </View>

            <View style={styles.featuresContainer}>
              <Text style={styles.featuresTitle}>PACKAGE INCLUDES</Text>

              {item.features.map((feature) => (
                <View key={feature} style={styles.featureRow}>
                  <Ionicons
                    name="checkmark-circle"
                    size={18}
                    color="#A3FF12"
                  />

                  <Text style={styles.featureText}>{feature}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}

        {/* INDIVIDUAL EXPERIENCES */}
        <View style={styles.experienceHeader}>
          <Text style={styles.sectionTitle}>INDIVIDUAL EXPERIENCES</Text>
        </View>

        {EXPERIENCES.map((item) => (
          <View key={item.name} style={styles.experienceCard}>
            <View style={styles.experienceTop}>
              <View style={styles.experienceIcon}>
                <Ionicons name={item.icon} size={28} color="#00E5FF" />
              </View>

              <View style={styles.experienceHeading}>
                <View style={styles.experienceBadge}>
                  <Text style={styles.experienceBadgeText}>
                    {item.category}
                  </Text>
                </View>

                <Text style={styles.experienceName}>{item.name}</Text>
              </View>
            </View>

            <Text style={styles.experienceDescription}>
              {item.description}
            </Text>

            <View style={styles.experienceInfoRow}>
              <View style={styles.experienceInfoItem}>
                <Ionicons
                  name="time-outline"
                  size={17}
                  color="#A3FF12"
                />
                <Text style={styles.experienceInfoText}>
                  {item.duration}
                </Text>
              </View>

              <View style={styles.experienceInfoItem}>
                <Ionicons
                  name="people-outline"
                  size={17}
                  color="#A3FF12"
                />
                <Text style={styles.experienceInfoText}>
                  {item.players}
                </Text>
              </View>
            </View>

            <View style={styles.experienceBottom}>
              <View>
                <Text style={styles.priceLabel}>FROM</Text>
                <Text style={styles.experiencePrice}>{item.price}</Text>
              </View>

              <Pressable
                style={styles.exploreButton}
                onPress={() => router.push('/calculate-fees')}
              >
                <Text style={styles.exploreButtonText}>SELECT</Text>
                <Ionicons
                  name="chevron-forward"
                  size={17}
                  color="#00E5FF"
                />
              </Pressable>
            </View>

            <View style={styles.experienceFeatures}>
              {item.features.map((feature) => (
                <View key={feature} style={styles.featureRow}>
                  <Ionicons
                    name="checkmark-circle"
                    size={17}
                    color="#A3FF12"
                  />

                  <Text style={styles.featureText}>{feature}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}

        {/* BOOKING CTA */}
        <View style={styles.ctaCard}>
          <Ionicons
            name="calendar-outline"
            size={40}
            color="#A3FF12"
          />

          <Text style={styles.ctaTitle}>READY TO BOOK?</Text>

          <Text style={styles.ctaText}>
            Select your preferred package or experience and calculate your
            booking fees.
          </Text>

          <Pressable
            style={styles.ctaButton}
            onPress={() => router.push('/calculate-fees')}
          >
            <Text style={styles.ctaButtonText}>CALCULATE FEES</Text>

            <Ionicons
              name="arrow-forward"
              size={19}
              color="#0B0F2E"
            />
          </Pressable>
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <NextLevelLogo width={135} height={55} />

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
    paddingBottom: 45,
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

  headerButton: {
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
    paddingBottom: 22,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 29,
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

  experienceHeader: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 12,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 0.5,
  },

  card: {
    marginHorizontal: 20,
    marginBottom: 16,
    padding: 17,
    backgroundColor: '#111638',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#292F5A',
  },

  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconBox: {
    width: 58,
    height: 58,
    borderRadius: 15,
    backgroundColor: '#1B1742',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
  },

  headingArea: {
    flex: 1,
  },

  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#25204C',
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 7,
  },

  badgeText: {
    color: '#A855F7',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 0.7,
  },

  packageName: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900',
    lineHeight: 23,
  },

  description: {
    color: '#969CB9',
    fontSize: 13,
    lineHeight: 19,
    marginTop: 14,
  },

  infoRow: {
    flexDirection: 'row',
    marginTop: 15,
    gap: 20,
  },

  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  infoText: {
    color: '#C4C8DB',
    fontSize: 12,
    fontWeight: '700',
  },

  priceRow: {
    marginTop: 18,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#292F5A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  priceLabel: {
    color: '#777D9F',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1,
  },

  price: {
    color: '#A3FF12',
    fontSize: 25,
    fontWeight: '900',
    marginTop: 2,
  },

  bookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    backgroundColor: '#A855F7',
    paddingHorizontal: 15,
    paddingVertical: 11,
    borderRadius: 9,
  },

  bookButtonText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.5,
  },

  featuresContainer: {
    marginTop: 18,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#292F5A',
  },

  featuresTitle: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.8,
    marginBottom: 10,
  },

  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },

  featureText: {
    flex: 1,
    color: '#969CB9',
    fontSize: 12,
    lineHeight: 17,
  },

  experienceCard: {
    marginHorizontal: 20,
    marginBottom: 14,
    padding: 16,
    backgroundColor: '#101532',
    borderRadius: 17,
    borderWidth: 1,
    borderColor: '#293854',
  },

  experienceTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  experienceIcon: {
    width: 54,
    height: 54,
    borderRadius: 14,
    backgroundColor: '#102D3A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
  },

  experienceHeading: {
    flex: 1,
  },

  experienceBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#10333E',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 6,
  },

  experienceBadgeText: {
    color: '#00E5FF',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 0.6,
  },

  experienceName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
    lineHeight: 21,
  },

  experienceDescription: {
    color: '#9298B5',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 13,
  },

  experienceInfoRow: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 13,
  },

  experienceInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  experienceInfoText: {
    color: '#C4C8DB',
    fontSize: 11,
    fontWeight: '700',
  },

  experienceBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: '#293854',
  },

  experiencePrice: {
    color: '#A3FF12',
    fontSize: 23,
    fontWeight: '900',
    marginTop: 2,
  },

  exploreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 13,
    paddingVertical: 9,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#00AFC7',
  },

  exploreButtonText: {
    color: '#00E5FF',
    fontSize: 10,
    fontWeight: '900',
  },

  experienceFeatures: {
    marginTop: 15,
    paddingTop: 13,
    borderTopWidth: 1,
    borderTopColor: '#293854',
  },

  ctaCard: {
    marginHorizontal: 20,
    marginTop: 20,
    padding: 23,
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