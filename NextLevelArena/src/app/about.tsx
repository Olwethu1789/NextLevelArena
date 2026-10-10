import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
    ImageBackground,
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import NextLevelLogo from '../../assets/images/Next_Level_Gaming_Esports_Logo.svg';

export default function AboutScreen() {
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
          <Text style={styles.smallTitle}>NEXT LEVEL</Text>

          <Text style={styles.title}>ABOUT US</Text>

          <View style={styles.titleLine} />

          <Text style={styles.subtitle}>
            Discover the story behind Johannesburg's
            gaming and esports destination.
          </Text>
        </View>

        {/* HERO */}
        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1200&q=80',
          }}
          style={styles.hero}
          imageStyle={styles.heroImage}
        >
          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>
              PLAY. COMPETE.
            </Text>

            <Text style={styles.heroAccent}>
              LEVEL UP.
            </Text>
          </View>
        </ImageBackground>

        {/* STORY */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            OUR STORY
          </Text>

          <Text style={styles.bodyText}>
            Next Level Gaming & Esports Arena was founded
            in 2023 by Jason Nadoo with the goal of creating
            an exciting destination where gamers can connect,
            compete and experience new technology.
          </Text>

          <Text style={styles.bodyText}>
            From competitive esports to immersive virtual
            reality and racing experiences, Next Level brings
            modern gaming entertainment together in one
            destination.
          </Text>
        </View>

        {/* MISSION */}
        <View style={styles.missionCard}>
          <Ionicons
            name="rocket-outline"
            size={38}
            color="#A855F7"
          />

          <Text style={styles.missionTitle}>
            OUR MISSION
          </Text>

          <Text style={styles.missionText}>
            To provide memorable gaming experiences that
            encourage competition, creativity, teamwork and
            community.
          </Text>
        </View>

        {/* FEATURES */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            WHAT WE OFFER
          </Text>

          <FeatureRow
            icon="game-controller-outline"
            title="Gaming Experiences"
            text="High-quality gaming setups for individuals and groups."
          />

          <FeatureRow
            icon="trophy-outline"
            title="Esports"
            text="Competitive environments for gamers and esports enthusiasts."
          />

          <FeatureRow
            icon="sparkles-outline"
            title="Virtual Reality"
            text="Immersive VR experiences using modern technology."
          />

          <FeatureRow
            icon="speedometer-outline"
            title="Racing"
            text="High-speed simulator experiences for racing fans."
          />
        </View>

        {/* STATS */}
        <View style={styles.stats}>
          <Stat number="2023" label="FOUNDED" />
          <Stat number="3+" label="EXPERIENCES" />
          <Stat number="1" label="DESTINATION" />
        </View>

        {/* CTA */}
        <View style={styles.cta}>
          <Text style={styles.ctaTitle}>
            READY TO PLAY?
          </Text>

          <Text style={styles.ctaText}>
            Explore our experiences and find your perfect
            gaming session.
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

function FeatureRow({
  icon,
  title,
  text,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  text: string;
}) {
  return (
    <View style={styles.featureRow}>
      <View style={styles.featureIcon}>
        <Ionicons
          name={icon}
          size={25}
          color="#A855F7"
        />
      </View>

      <View style={styles.featureInfo}>
        <Text style={styles.featureTitle}>{title}</Text>
        <Text style={styles.featureText}>{text}</Text>
      </View>
    </View>
  );
}

function Stat({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <View style={styles.stat}>
      <Text style={styles.statNumber}>{number}</Text>
      <Text style={styles.statLabel}>{label}</Text>
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
  },

  title: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '900',
    marginTop: 4,
  },

  titleLine: {
    width: 65,
    height: 4,
    backgroundColor: '#A855F7',
    borderRadius: 5,
    marginTop: 12,
    marginBottom: 15,
  },

  subtitle: {
    color: '#B9BCD1',
    fontSize: 15,
    lineHeight: 23,
  },

  hero: {
    height: 260,
    justifyContent: 'flex-end',
    marginHorizontal: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },

  heroImage: {
    opacity: 0.65,
  },

  heroOverlay: {
    padding: 22,
    backgroundColor: 'rgba(11, 15, 46, 0.55)',
  },

  heroTitle: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '900',
  },

  heroAccent: {
    color: '#A855F7',
    fontSize: 25,
    fontWeight: '900',
  },

  section: {
    paddingHorizontal: 20,
    marginTop: 30,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '900',
    letterSpacing: 1,
    marginBottom: 15,
  },

  bodyText: {
    color: '#AEB2C9',
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 14,
  },

  missionCard: {
    marginHorizontal: 20,
    marginTop: 20,
    padding: 24,
    borderRadius: 18,
    backgroundColor: '#18123A',
    borderWidth: 1,
    borderColor: '#7D3FC2',
  },

  missionTitle: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '900',
    marginTop: 12,
  },

  missionText: {
    color: '#B9BCD1',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 8,
  },

  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#151A3D',
    borderRadius: 15,
    padding: 15,
    marginBottom: 11,
    borderWidth: 1,
    borderColor: '#292E55',
  },

  featureIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#211A45',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  featureInfo: {
    flex: 1,
  },

  featureTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
  },

  featureText: {
    color: '#9297B5',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 4,
  },

  stats: {
    marginHorizontal: 20,
    marginTop: 30,
    paddingVertical: 22,
    borderRadius: 18,
    backgroundColor: '#151A3D',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: '#292E55',
  },

  stat: {
    alignItems: 'center',
  },

  statNumber: {
    color: '#A855F7',
    fontSize: 24,
    fontWeight: '900',
  },

  statLabel: {
    color: '#8D92AE',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    marginTop: 5,
  },

  cta: {
    marginHorizontal: 20,
    marginTop: 30,
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
  },

  ctaText: {
    color: '#B7B9CF',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    marginVertical: 12,
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
    fontWeight: '900',
    fontSize: 13,
  },

  footer: {
    alignItems: 'center',
    paddingTop: 35,
  },

  footerText: {
    color: '#A855F7',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 2,
  },

  copyright: {
    color: '#676B87',
    fontSize: 11,
    marginTop: 12,
  },
});