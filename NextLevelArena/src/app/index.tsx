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

export default function HomeScreen() {
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
          <NextLevelLogo width={145} height={55} />

          <View style={styles.headerActions}>
            <Pressable
              style={styles.headerButton}
              onPress={() => router.push('/about')}
            >
              <Ionicons
                name="information-circle-outline"
                size={23}
                color="#FFFFFF"
              />
            </Pressable>

            <Pressable
              style={styles.headerButton}
              onPress={() => router.push('/contact')}
            >
              <Ionicons
                name="menu-outline"
                size={25}
                color="#FFFFFF"
              />
            </Pressable>
          </View>
        </View>

        {/* HERO */}
        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
          }}
          style={styles.hero}
          imageStyle={styles.heroImage}
        >
          <View style={styles.heroOverlay}>
            <Text style={styles.heroSmall}>WELCOME TO</Text>

            <Text style={styles.heroTitle}>
              NEXT LEVEL
            </Text>

            <Text style={styles.heroSubtitle}>
              GAMING & ESPORTS ARENA
            </Text>

            <Text style={styles.heroDescription}>
              Play. Compete. Level up. Experience gaming
              like never before.
            </Text>

            <Pressable
              style={styles.primaryButton}
              onPress={() => router.push('/calculate-fees')}
            >
              <Text style={styles.primaryButtonText}>
                BOOK NOW
              </Text>

              <Ionicons
                name="arrow-forward"
                size={20}
                color="#0B0F2E"
              />
            </Pressable>

            <Pressable
              style={styles.outlineButton}
              onPress={() => router.push('/overview')}
            >
              <Text style={styles.outlineButtonText}>
                EXPLORE PACKAGES
              </Text>
            </Pressable>
          </View>
        </ImageBackground>

        {/* FEATURED */}
        <View style={styles.section}>
          <Text style={styles.sectionSmall}>EXPERIENCE</Text>
          <Text style={styles.sectionTitle}>
            LEVEL UP YOUR GAME
          </Text>

          <Text style={styles.sectionDescription}>
            Discover premium gaming experiences designed
            for casual players, competitive gamers and
            esports enthusiasts.
          </Text>

          <ExperienceCard
            icon="game-controller-outline"
            title="ESPORTS GAMING"
            description="Competitive gaming setups built for serious players."
            onPress={() => router.push('/overview')}
          />

          <ExperienceCard
            icon="sparkles-outline"
            title="VIRTUAL REALITY"
            description="Step into immersive worlds with next-generation VR."
            onPress={() => router.push('/overview')}
          />

          <ExperienceCard
            icon="speedometer-outline"
            title="RACING SIMULATOR"
            description="Feel the speed with an immersive racing experience."
            onPress={() => router.push('/overview')}
          />
        </View>

        {/* CTA */}
        <View style={styles.cta}>
          <Ionicons
            name="trophy-outline"
            size={45}
            color="#A855F7"
          />

          <Text style={styles.ctaTitle}>
            READY TO LEVEL UP?
          </Text>

          <Text style={styles.ctaText}>
            Choose your experience and book your session
            today.
          </Text>

          <Pressable
            style={styles.ctaButton}
            onPress={() => router.push('/overview')}
          >
            <Text style={styles.ctaButtonText}>
              VIEW PACKAGES
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

          <Text style={styles.footerTagline}>
            PLAY • COMPETE • LEVEL UP
          </Text>

          <View style={styles.socialRow}>
            <Ionicons
              name="logo-instagram"
              size={23}
              color="#FFFFFF"
            />
            <Ionicons
              name="logo-facebook"
              size={23}
              color="#FFFFFF"
            />
            <Ionicons
              name="logo-tiktok"
              size={23}
              color="#FFFFFF"
            />
            <Ionicons
              name="logo-youtube"
              size={23}
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

function ExperienceCard({
  icon,
  title,
  description,
  onPress,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      style={styles.experienceCard}
      onPress={onPress}
    >
      <View style={styles.experienceIcon}>
        <Ionicons
          name={icon}
          size={30}
          color="#A855F7"
        />
      </View>

      <View style={styles.experienceInfo}>
        <Text style={styles.experienceTitle}>
          {title}
        </Text>

        <Text style={styles.experienceDescription}>
          {description}
        </Text>
      </View>

      <Ionicons
        name="chevron-forward"
        size={22}
        color="#777B99"
      />
    </Pressable>
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

  headerActions: {
    flexDirection: 'row',
    gap: 10,
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

  hero: {
    minHeight: 510,
    justifyContent: 'flex-end',
  },

  heroImage: {
    opacity: 0.7,
  },

  heroOverlay: {
    padding: 25,
    paddingTop: 130,
    backgroundColor: 'rgba(11, 15, 46, 0.65)',
  },

  heroSmall: {
    color: '#00E5FF',
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 2,
  },

  heroTitle: {
    color: '#FFFFFF',
    fontSize: 44,
    fontWeight: '900',
    letterSpacing: 2,
    marginTop: 5,
  },

  heroSubtitle: {
    color: '#A855F7',
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: 2,
    marginTop: 2,
  },

  heroDescription: {
    color: '#D3D5E3',
    fontSize: 15,
    lineHeight: 23,
    marginTop: 18,
    marginBottom: 25,
    maxWidth: 330,
  },

  primaryButton: {
    height: 52,
    backgroundColor: '#A3FF12',
    borderRadius: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 12,
  },

  primaryButtonText: {
    color: '#0B0F2E',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 1,
  },

  outlineButton: {
    height: 52,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#A855F7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  outlineButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 1,
  },

  section: {
    padding: 20,
    paddingTop: 35,
  },

  sectionSmall: {
    color: '#00E5FF',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 2,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: '900',
    marginTop: 4,
  },

  sectionDescription: {
    color: '#AEB2C9',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 10,
    marginBottom: 20,
  },

  experienceCard: {
    minHeight: 90,
    backgroundColor: '#151A3D',
    borderRadius: 16,
    marginBottom: 12,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#292E55',
  },

  experienceIcon: {
    width: 52,
    height: 52,
    borderRadius: 14,
    backgroundColor: '#211A45',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  experienceInfo: {
    flex: 1,
  },

  experienceTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 0.7,
  },

  experienceDescription: {
    color: '#9297B5',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 5,
  },

  cta: {
    marginHorizontal: 20,
    marginTop: 10,
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
    marginTop: 12,
  },

  ctaText: {
    color: '#B7B9CF',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
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
    fontWeight: '900',
    fontSize: 13,
  },

  footer: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 10,
  },

  footerTagline: {
    color: '#A855F7',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 2,
    marginTop: 5,
  },

  socialRow: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 18,
  },

  copyright: {
    color: '#676B87',
    fontSize: 11,
    marginTop: 15,
  },
});