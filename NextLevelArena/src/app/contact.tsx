import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
    Linking,
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import NextLevelLogo from '../../assets/images/Next_Level_Gaming_Esports_Logo.svg';

export default function ContactScreen() {
  const router = useRouter();

  const openPhone = () => {
    Linking.openURL('tel:+27110000000');
  };

  const openEmail = () => {
    Linking.openURL(
      'mailto:info@nextlevelarena.co.za',
    );
  };

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
            onPress={() => router.back()}
          >
            <Ionicons
              name="arrow-back"
              size={24}
              color="#FFFFFF"
            />
          </Pressable>

          <NextLevelLogo width={145} height={55} />

          <Pressable
            style={styles.headerButton}
            onPress={() => router.push('/')}
          >
            <Ionicons
              name="home-outline"
              size={23}
              color="#FFFFFF"
            />
          </Pressable>
        </View>

        {/* TITLE */}
        <View style={styles.titleSection}>
          <Text style={styles.smallTitle}>
            NEXT LEVEL
          </Text>

          <Text style={styles.title}>
            CONTACT US
          </Text>

          <View style={styles.titleLine} />

          <Text style={styles.subtitle}>
            Ready to level up? Get in touch with the Next
            Level Gaming & Esports Arena team.
          </Text>
        </View>

        {/* CONTACT DETAILS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            GET IN TOUCH
          </Text>

          <ContactCard
            icon="location-outline"
            title="LOCATION"
            text="Johannesburg, Gauteng"
          />

          <ContactCard
            icon="call-outline"
            title="PHONE"
            text="+27 11 000 0000"
            onPress={openPhone}
          />

          <ContactCard
            icon="mail-outline"
            title="EMAIL"
            text="info@nextlevelarena.co.za"
            onPress={openEmail}
          />

          <ContactCard
            icon="time-outline"
            title="OPENING HOURS"
            text="Monday – Sunday | 09:00 – 22:00"
          />
        </View>

        {/* LOCATION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            FIND US
          </Text>

          <View style={styles.mapCard}>
            <Ionicons
              name="location"
              size={50}
              color="#A855F7"
            />

            <Text style={styles.mapTitle}>
              NEXT LEVEL ARENA
            </Text>

            <Text style={styles.mapText}>
              Johannesburg, Gauteng
            </Text>

            <Pressable
              style={styles.mapButton}
              onPress={() => {}}
            >
              <Ionicons
                name="navigate-outline"
                size={19}
                color="#FFFFFF"
              />

              <Text style={styles.mapButtonText}>
                VIEW ON MAP
              </Text>
            </Pressable>
          </View>
        </View>

        {/* FEATURES */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            WHY VISIT US?
          </Text>

          <View style={styles.featuresGrid}>
            <Feature
              icon="game-controller-outline"
              title="GAMING"
              text="Premium gaming setups"
            />

            <Feature
              icon="trophy-outline"
              title="ESPORTS"
              text="Competitive experiences"
            />

            <Feature
              icon="sparkles-outline"
              title="VR"
              text="Immersive virtual reality"
            />

            <Feature
              icon="speedometer-outline"
              title="RACING"
              text="High-speed simulators"
            />
          </View>
        </View>

        {/* SOCIAL */}
        <View style={styles.socialSection}>
          <Text style={styles.sectionTitle}>
            FOLLOW NEXT LEVEL
          </Text>

          <View style={styles.socialRow}>
            <Pressable style={styles.socialButton}>
              <Ionicons
                name="logo-instagram"
                size={25}
                color="#FFFFFF"
              />
            </Pressable>

            <Pressable style={styles.socialButton}>
              <Ionicons
                name="logo-facebook"
                size={25}
                color="#FFFFFF"
              />
            </Pressable>

            <Pressable style={styles.socialButton}>
              <Ionicons
                name="logo-tiktok"
                size={25}
                color="#FFFFFF"
              />
            </Pressable>

            <Pressable style={styles.socialButton}>
              <Ionicons
                name="logo-youtube"
                size={25}
                color="#FFFFFF"
              />
            </Pressable>
          </View>
        </View>

        {/* CTA */}
        <View style={styles.cta}>
          <Text style={styles.ctaTitle}>
            READY TO LEVEL UP?
          </Text>

          <Text style={styles.ctaText}>
            Choose your experience and start your Next
            Level journey today.
          </Text>

          <Pressable
            style={styles.ctaButton}
            onPress={() => router.push('/overview')}
          >
            <Text style={styles.ctaButtonText}>
              EXPLORE PACKAGES
            </Text>

            <Ionicons
              name="arrow-forward"
              size={20}
              color="#0B0F2E"
            />
          </Pressable>
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <NextLevelLogo width={180} height={68} />

          <Text style={styles.footerText}>
            PLAY • COMPETE • LEVEL UP
          </Text>

          <Text style={styles.copyright}>
            © 2026 Next Level Gaming & Esports Arena
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function ContactCard({
  icon,
  title,
  text,
  onPress,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  text: string;
  onPress?: () => void;
}) {
  return (
    <Pressable
      style={styles.contactCard}
      onPress={onPress}
    >
      <View style={styles.iconBox}>
        <Ionicons
          name={icon}
          size={25}
          color="#A855F7"
        />
      </View>

      <View style={styles.contactInfo}>
        <Text style={styles.contactTitle}>
          {title}
        </Text>

        <Text style={styles.contactText}>
          {text}
        </Text>
      </View>

      {onPress && (
        <Ionicons
          name="chevron-forward"
          size={20}
          color="#777"
        />
      )}
    </Pressable>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  text: string;
}) {
  return (
    <View style={styles.featureCard}>
      <Ionicons
        name={icon}
        size={28}
        color="#A855F7"
      />

      <Text style={styles.featureTitle}>
        {title}
      </Text>

      <Text style={styles.featureText}>
        {text}
      </Text>
    </View>
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
    paddingBottom: 30,
  },

  header: {
    height: 75,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#25294A',
  },

  headerButton: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#151A3D',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#33375B',
  },

  titleSection: {
    paddingHorizontal: 20,
    paddingTop: 35,
    paddingBottom: 25,
  },

  smallTitle: {
    color: '#00E5FF',
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 5,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '900',
    letterSpacing: 1,
  },

  titleLine: {
    width: 65,
    height: 4,
    backgroundColor: '#A855F7',
    marginTop: 12,
    marginBottom: 15,
    borderRadius: 5,
  },

  subtitle: {
    color: '#B9BCD1',
    fontSize: 15,
    lineHeight: 23,
  },

  section: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 1,
    marginBottom: 15,
  },

  contactCard: {
    minHeight: 78,
    backgroundColor: '#151A3D',
    borderRadius: 16,
    marginBottom: 12,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#292E55',
  },

  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#211A45',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  contactInfo: {
    flex: 1,
  },

  contactTitle: {
    color: '#A855F7',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1.5,
    marginBottom: 5,
  },

  contactText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },

  mapCard: {
    height: 250,
    borderRadius: 20,
    backgroundColor: '#13183A',
    borderWidth: 1,
    borderColor: '#30355C',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  mapTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900',
    marginTop: 12,
    letterSpacing: 1,
  },

  mapText: {
    color: '#AEB2C9',
    fontSize: 14,
    marginTop: 5,
    marginBottom: 20,
  },

  mapButton: {
    backgroundColor: '#A855F7',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  mapButtonText: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 12,
  },

  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  featureCard: {
    width: '48%',
    backgroundColor: '#151A3D',
    borderRadius: 16,
    padding: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#292E55',
  },

  featureTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
    marginTop: 12,
  },

  featureText: {
    color: '#9297B5',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 5,
  },

  socialSection: {
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 30,
  },

  socialRow: {
    flexDirection: 'row',
    gap: 14,
  },

  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 14,
    backgroundColor: '#151A3D',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#30355C',
  },

  cta: {
    marginHorizontal: 20,
    padding: 25,
    borderRadius: 20,
    backgroundColor: '#18123A',
    borderWidth: 1,
    borderColor: '#7D3FC2',
    alignItems: 'center',
  },

  ctaTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 1,
    textAlign: 'center',
  },

  ctaText: {
    color: '#B7B9CF',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },

  ctaButton: {
    backgroundColor: '#A3FF12',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  ctaButtonText: {
    color: '#0B0F2E',
    fontSize: 13,
    fontWeight: '900',
  },

  footer: {
    alignItems: 'center',
    paddingTop: 35,
    paddingBottom: 10,
  },

  footerText: {
    color: '#A855F7',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 2,
    marginTop: 5,
  },

  copyright: {
    color: '#676B87',
    fontSize: 11,
    marginTop: 12,
  },
});