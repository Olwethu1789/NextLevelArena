import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

import NextLevelLogo from '../../assets/images/Next_Level_Gaming_Esports_Logo.svg';

type BookingOption = {
  id: string;
  name: string;
  category: string;
  price: number;
  icon: keyof typeof Ionicons.glyphMap;
};

const BOOKING_OPTIONS: BookingOption[] = [
  {
    id: 'ultimate',
    name: 'Ultimate Gamer Pass',
    category: 'GAMING PACKAGE',
    price: 450,
    icon: 'game-controller-outline',
  },
  {
    id: 'vip',
    name: 'VIP Gaming Experience',
    category: 'PREMIUM PACKAGE',
    price: 650,
    icon: 'diamond-outline',
  },
  {
    id: 'esports',
    name: 'Esports Training Package',
    category: 'ESPORTS PACKAGE',
    price: 550,
    icon: 'trophy-outline',
  },
  {
    id: 'birthday',
    name: 'Birthday Party Package',
    category: 'EVENT PACKAGE',
    price: 850,
    icon: 'gift-outline',
  },
  {
    id: 'vr',
    name: 'Virtual Reality Experience',
    category: 'VR EXPERIENCE',
    price: 300,
    icon: 'sparkles-outline',
  },
  {
    id: 'racing',
    name: 'Racing Simulator Challenge',
    category: 'RACING EXPERIENCE',
    price: 280,
    icon: 'speedometer-outline',
  },
  {
    id: 'escape',
    name: 'Escape Room Challenge',
    category: 'CHALLENGE EXPERIENCE',
    price: 350,
    icon: 'key-outline',
  },
];

const VAT_RATE = 0.15;

function formatCurrency(amount: number) {
  return `R${amount.toFixed(2)}`;
}

export default function CalculateFees() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [selectedPackages, setSelectedPackages] = useState<string[]>([]);

  const [confirmed, setConfirmed] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  const togglePackage = (id: string) => {
    setErrorMessage('');

    setSelectedPackages((current) => {
      if (current.includes(id)) {
        return current.filter((item) => item !== id);
      }

      return [...current, id];
    });
  };

  const calculation = useMemo(() => {
    const selectedItems = BOOKING_OPTIONS.filter((item) =>
      selectedPackages.includes(item.id)
    );

    const subtotal = selectedItems.reduce(
      (total, item) => total + item.price,
      0
    );

    let discountRate = 0;

    if (selectedItems.length === 2) {
      discountRate = 0.05;
    } else if (selectedItems.length === 3) {
      discountRate = 0.1;
    } else if (selectedItems.length >= 4) {
      discountRate = 0.15;
    }

    const discount = subtotal * discountRate;

    const afterDiscount = subtotal - discount;

    const vat = afterDiscount * VAT_RATE;

    const total = afterDiscount + vat;

    return {
      selectedItems,
      subtotal,
      discountRate,
      discount,
      afterDiscount,
      vat,
      total,
    };
  }, [selectedPackages]);

  const confirmBooking = () => {
    setErrorMessage('');

    if (name.trim().length === 0) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (phone.trim().length === 0) {
      setErrorMessage('Please enter your phone number.');
      return;
    }

    if (email.trim().length === 0) {
      setErrorMessage('Please enter your email address.');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (selectedPackages.length === 0) {
      setErrorMessage(
        'Please select at least one package or experience.'
      );
      return;
    }

    setConfirmed(true);
  };

  const clearForm = () => {
    setName('');
    setPhone('');
    setEmail('');
    setSelectedPackages([]);
    setConfirmed(false);
    setErrorMessage('');
  };

  if (confirmed) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.confirmationContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.confirmationLogo}>
            <NextLevelLogo width={170} height={75} />
          </View>

          <View style={styles.successIcon}>
            <Ionicons
              name="checkmark"
              size={55}
              color="#0B0F2E"
            />
          </View>

          <Text style={styles.successTitle}>
            BOOKING CONFIRMED!
          </Text>

          <View style={styles.successLine} />

          <Text style={styles.successMessage}>
            Thank you, {name.trim()}!
          </Text>

          <Text style={styles.successDescription}>
            Your booking has been successfully calculated and
            confirmed.
          </Text>

          <View style={styles.bookingSummary}>
            <Text style={styles.bookingSummaryTitle}>
              BOOKING SUMMARY
            </Text>

            {calculation.selectedItems.map((item) => (
              <View
                key={item.id}
                style={styles.confirmedItem}
              >
                <Text style={styles.confirmedItemName}>
                  {item.name}
                </Text>

                <Text style={styles.confirmedItemPrice}>
                  {formatCurrency(item.price)}
                </Text>
              </View>
            ))}

            <View style={styles.confirmedDivider} />

            <View style={styles.confirmedTotal}>
              <Text style={styles.confirmedTotalLabel}>
                TOTAL
              </Text>

              <Text style={styles.confirmedTotalValue}>
                {formatCurrency(calculation.total)}
              </Text>
            </View>
          </View>

          <View style={styles.confirmedInfo}>
            <Ionicons
              name="information-circle-outline"
              size={22}
              color="#00E5FF"
            />

            <Text style={styles.confirmedInfoText}>
              Please contact Next Level Gaming & Esports Arena if
              you need assistance with your booking.
            </Text>
          </View>

          <Pressable
            style={styles.continueButton}
            onPress={() => router.push('/contact')}
          >
            <Text style={styles.continueButtonText}>
              CONTINUE TO CONTACT
            </Text>

            <Ionicons
              name="arrow-forward"
              size={20}
              color="#0B0F2E"
            />
          </Pressable>

          <Pressable
            style={styles.homeButton}
            onPress={() => router.replace('/')}
          >
            <Ionicons
              name="home-outline"
              size={19}
              color="#A9AEC9"
            />

            <Text style={styles.homeButtonText}>
              BACK TO HOME
            </Text>
          </Pressable>

          <View style={styles.confirmationFooter}>
            <NextLevelLogo width={135} height={55} />

            <Text style={styles.footerTagline}>
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

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
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
              <Ionicons
                name="arrow-back"
                size={24}
                color="#FFFFFF"
              />
            </Pressable>

            <NextLevelLogo width={150} height={65} />

            <Pressable
              style={styles.headerButton}
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
            <Text style={styles.title}>CALCULATE FEES</Text>

            <View style={styles.titleLine} />

            <Text style={styles.subtitle}>
              Enter your details, choose your packages and calculate
              your booking total.
            </Text>
          </View>

          {/* CUSTOMER DETAILS */}
          <View style={styles.section}>
            <View style={styles.sectionHeading}>
              <Ionicons
                name="person-outline"
                size={21}
                color="#A855F7"
              />

              <Text style={styles.sectionTitle}>
                CUSTOMER DETAILS
              </Text>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>FULL NAME</Text>

              <TextInput
                value={name}
                onChangeText={(text) => {
                  setName(text);
                  setErrorMessage('');
                }}
                placeholder="Enter your full name"
                placeholderTextColor="#686E91"
                style={styles.input}
                autoCapitalize="words"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>PHONE NUMBER</Text>

              <TextInput
                value={phone}
                onChangeText={(text) => {
                  setPhone(text);
                  setErrorMessage('');
                }}
                placeholder="Enter your phone number"
                placeholderTextColor="#686E91"
                style={styles.input}
                keyboardType="phone-pad"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>EMAIL ADDRESS</Text>

              <TextInput
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  setErrorMessage('');
                }}
                placeholder="Enter your email address"
                placeholderTextColor="#686E91"
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
          </View>

          {/* PACKAGE SELECTION */}
          <View style={styles.section}>
            <View style={styles.sectionHeading}>
              <Ionicons
                name="game-controller-outline"
                size={21}
                color="#A855F7"
              />

              <Text style={styles.sectionTitle}>
                SELECT PACKAGES
              </Text>
            </View>

            <Text style={styles.selectionHint}>
              Select one or more options to receive an automatic
              discount.
            </Text>

            {BOOKING_OPTIONS.map((item) => {
              const isSelected = selectedPackages.includes(item.id);

              return (
                <Pressable
                  key={item.id}
                  style={[
                    styles.optionCard,
                    isSelected && styles.optionCardSelected,
                  ]}
                  onPress={() => togglePackage(item.id)}
                >
                  <View
                    style={[
                      styles.optionIcon,
                      isSelected && styles.optionIconSelected,
                    ]}
                  >
                    <Ionicons
                      name={item.icon}
                      size={24}
                      color={isSelected ? '#A3FF12' : '#A855F7'}
                    />
                  </View>

                  <View style={styles.optionInfo}>
                    <Text style={styles.optionCategory}>
                      {item.category}
                    </Text>

                    <Text style={styles.optionName}>
                      {item.name}
                    </Text>

                    <Text style={styles.optionPrice}>
                      {formatCurrency(item.price)}
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.checkbox,
                      isSelected && styles.checkboxSelected,
                    ]}
                  >
                    {isSelected && (
                      <Ionicons
                        name="checkmark"
                        size={17}
                        color="#0B0F2E"
                      />
                    )}
                  </View>
                </Pressable>
              );
            })}
          </View>

          {/* ERROR MESSAGE */}
          {errorMessage !== '' && (
            <View style={styles.errorCard}>
              <Ionicons
                name="alert-circle-outline"
                size={22}
                color="#FF6B81"
              />

              <Text style={styles.errorText}>
                {errorMessage}
              </Text>
            </View>
          )}

          {/* DISCOUNTS */}
          <View style={styles.discountCard}>
            <View style={styles.discountIcon}>
              <Ionicons
                name="pricetag-outline"
                size={23}
                color="#A3FF12"
              />
            </View>

            <View style={styles.discountContent}>
              <Text style={styles.discountTitle}>
                AUTOMATIC DISCOUNTS
              </Text>

              <Text style={styles.discountText}>
                1 option = 0% • 2 options = 5% • 3 options = 10% •
                4+ options = 15%
              </Text>
            </View>
          </View>

          {/* SUMMARY */}
          <View style={styles.calculationCard}>
            <View style={styles.calculationHeader}>
              <View>
                <Text style={styles.calculationTitle}>
                  BOOKING SUMMARY
                </Text>

                <Text style={styles.calculationSubtitle}>
                  {calculation.selectedItems.length} option
                  {calculation.selectedItems.length === 1
                    ? ''
                    : 's'} selected
                </Text>
              </View>

              <Ionicons
                name="receipt-outline"
                size={28}
                color="#A855F7"
              />
            </View>

            {calculation.selectedItems.length > 0 && (
              <View style={styles.selectedList}>
                {calculation.selectedItems.map((item) => (
                  <View
                    key={item.id}
                    style={styles.selectedItem}
                  >
                    <Text style={styles.selectedItemName}>
                      {item.name}
                    </Text>

                    <Text style={styles.selectedItemPrice}>
                      {formatCurrency(item.price)}
                    </Text>
                  </View>
                ))}
              </View>
            )}

            <View style={styles.summaryDivider} />

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Subtotal</Text>

              <Text style={styles.summaryValue}>
                {formatCurrency(calculation.subtotal)}
              </Text>
            </View>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>
                Discount ({calculation.discountRate * 100}%)
              </Text>

              <Text style={styles.discountValue}>
                -{formatCurrency(calculation.discount)}
              </Text>
            </View>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>
                After Discount
              </Text>

              <Text style={styles.summaryValue}>
                {formatCurrency(calculation.afterDiscount)}
              </Text>
            </View>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>VAT (15%)</Text>

              <Text style={styles.summaryValue}>
                {formatCurrency(calculation.vat)}
              </Text>
            </View>

            <View style={styles.totalDivider} />

            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>TOTAL</Text>

              <Text style={styles.totalValue}>
                {formatCurrency(calculation.total)}
              </Text>
            </View>
          </View>

          {/* CONFIRM */}
          <Pressable
            style={styles.confirmButton}
            onPress={confirmBooking}
          >
            <Ionicons
              name="checkmark-circle-outline"
              size={22}
              color="#0B0F2E"
            />

            <Text style={styles.confirmButtonText}>
              CONFIRM BOOKING
            </Text>
          </Pressable>

          {/* CLEAR */}
          <Pressable
            style={styles.clearButton}
            onPress={clearForm}
          >
            <Ionicons
              name="refresh-outline"
              size={19}
              color="#A9AEC9"
            />

            <Text style={styles.clearButtonText}>
              CLEAR FORM
            </Text>
          </Pressable>

          {/* CONTACT */}
          <View style={styles.contactCard}>
            <Ionicons
              name="help-circle-outline"
              size={31}
              color="#00E5FF"
            />

            <Text style={styles.contactTitle}>
              NEED HELP?
            </Text>

            <Text style={styles.contactText}>
              Contact Next Level Gaming & Esports Arena if you have
              questions about your booking.
            </Text>

            <Pressable
              style={styles.contactButton}
              onPress={() => router.push('/contact')}
            >
              <Text style={styles.contactButtonText}>
                CONTACT US
              </Text>

              <Ionicons
                name="arrow-forward"
                size={17}
                color="#00E5FF"
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
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0B0F2E',
  },

  keyboardContainer: {
    flex: 1,
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

  section: {
    marginHorizontal: 20,
    marginBottom: 20,
  },

  sectionHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    marginBottom: 14,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '900',
    letterSpacing: 0.5,
  },

  inputGroup: {
    marginBottom: 13,
  },

  inputLabel: {
    color: '#A9AEC9',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.8,
    marginBottom: 7,
  },

  input: {
    height: 49,
    backgroundColor: '#111638',
    borderWidth: 1,
    borderColor: '#292F5A',
    borderRadius: 10,
    paddingHorizontal: 14,
    color: '#FFFFFF',
    fontSize: 14,
  },

  selectionHint: {
    color: '#777D9F',
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 12,
  },

  optionCard: {
    minHeight: 78,
    backgroundColor: '#111638',
    borderWidth: 1,
    borderColor: '#292F5A',
    borderRadius: 13,
    padding: 11,
    marginBottom: 9,
    flexDirection: 'row',
    alignItems: 'center',
  },

  optionCardSelected: {
    borderColor: '#A855F7',
    backgroundColor: '#17143B',
  },

  optionIcon: {
    width: 47,
    height: 47,
    borderRadius: 12,
    backgroundColor: '#1B1742',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 11,
  },

  optionIconSelected: {
    backgroundColor: '#25204C',
  },

  optionInfo: {
    flex: 1,
  },

  optionCategory: {
    color: '#777D9F',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 0.7,
    marginBottom: 3,
  },

  optionName: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
    lineHeight: 18,
  },

  optionPrice: {
    color: '#A3FF12',
    fontSize: 12,
    fontWeight: '900',
    marginTop: 3,
  },

  checkbox: {
    width: 25,
    height: 25,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#4A5075',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },

  checkboxSelected: {
    backgroundColor: '#A3FF12',
    borderColor: '#A3FF12',
  },

  errorCard: {
    marginHorizontal: 20,
    marginBottom: 16,
    padding: 13,
    borderRadius: 11,
    backgroundColor: '#321B2A',
    borderWidth: 1,
    borderColor: '#713447',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },

  errorText: {
    flex: 1,
    color: '#FF9CAD',
    fontSize: 12,
    lineHeight: 18,
  },

  discountCard: {
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#142030',
    borderWidth: 1,
    borderColor: '#2B5260',
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },

  discountIcon: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: '#1A332C',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  discountContent: {
    flex: 1,
  },

  discountTitle: {
    color: '#A3FF12',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.7,
    marginBottom: 4,
  },

  discountText: {
    color: '#A9AEC9',
    fontSize: 11,
    lineHeight: 17,
  },

  calculationCard: {
    marginHorizontal: 20,
    padding: 18,
    backgroundColor: '#111638',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#343A70',
    marginBottom: 18,
  },

  calculationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  calculationTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 0.5,
  },

  calculationSubtitle: {
    color: '#777D9F',
    fontSize: 11,
    marginTop: 4,
  },

  selectedList: {
    marginTop: 15,
    padding: 12,
    backgroundColor: '#0D1130',
    borderRadius: 10,
  },

  selectedItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  selectedItemName: {
    flex: 1,
    color: '#C4C8DB',
    fontSize: 11,
    paddingRight: 10,
  },

  selectedItemPrice: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '800',
  },

  summaryDivider: {
    height: 1,
    backgroundColor: '#292F5A',
    marginVertical: 15,
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 11,
  },

  summaryLabel: {
    color: '#9298B5',
    fontSize: 12,
  },

  summaryValue: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
  },

  discountValue: {
    color: '#A3FF12',
    fontSize: 12,
    fontWeight: '800',
  },

  totalDivider: {
    height: 1,
    backgroundColor: '#4A3470',
    marginTop: 5,
    marginBottom: 15,
  },

  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  totalLabel: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 1,
  },

  totalValue: {
    color: '#A3FF12',
    fontSize: 25,
    fontWeight: '900',
  },

  confirmButton: {
    marginHorizontal: 20,
    height: 54,
    borderRadius: 12,
    backgroundColor: '#A3FF12',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
  },

  confirmButtonText: {
    color: '#0B0F2E',
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 0.5,
  },

  clearButton: {
    marginHorizontal: 20,
    marginTop: 10,
    height: 48,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: '#343A70',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 7,
  },

  clearButtonText: {
    color: '#A9AEC9',
    fontSize: 11,
    fontWeight: '900',
  },

  contactCard: {
    marginHorizontal: 20,
    marginTop: 22,
    padding: 21,
    borderRadius: 18,
    backgroundColor: '#101F35',
    borderWidth: 1,
    borderColor: '#275267',
    alignItems: 'center',
  },

  contactTitle: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '900',
    marginTop: 9,
  },

  contactText: {
    color: '#9298B5',
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 15,
  },

  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },

  contactButtonText: {
    color: '#00E5FF',
    fontSize: 11,
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

  confirmationContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 45,
  },

  confirmationLogo: {
    marginTop: 35,
    marginBottom: 35,
  },

  successIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#A3FF12',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },

  successTitle: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: 0.7,
  },

  successLine: {
    width: 60,
    height: 4,
    backgroundColor: '#A855F7',
    borderRadius: 2,
    marginTop: 12,
    marginBottom: 18,
  },

  successMessage: {
    color: '#A3FF12',
    fontSize: 19,
    fontWeight: '900',
    textAlign: 'center',
  },

  successDescription: {
    color: '#A9AEC9',
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',
    marginTop: 8,
    maxWidth: 320,
  },

  bookingSummary: {
    width: '100%',
    marginTop: 25,
    padding: 18,
    backgroundColor: '#111638',
    borderWidth: 1,
    borderColor: '#343A70',
    borderRadius: 17,
  },

  bookingSummaryTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: 0.7,
    marginBottom: 14,
  },

  confirmedItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  confirmedItemName: {
    flex: 1,
    color: '#A9AEC9',
    fontSize: 12,
    paddingRight: 10,
  },

  confirmedItemPrice: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
  },

  confirmedDivider: {
    height: 1,
    backgroundColor: '#292F5A',
    marginVertical: 12,
  },

  confirmedTotal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  confirmedTotalLabel: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
  },

  confirmedTotalValue: {
    color: '#A3FF12',
    fontSize: 23,
    fontWeight: '900',
  },

  confirmedInfo: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#101F35',
    borderWidth: 1,
    borderColor: '#275267',
    borderRadius: 13,
    padding: 14,
    marginTop: 15,
    gap: 10,
  },

  confirmedInfoText: {
    flex: 1,
    color: '#9298B5',
    fontSize: 11,
    lineHeight: 17,
  },

  continueButton: {
    width: '100%',
    height: 54,
    borderRadius: 12,
    backgroundColor: '#A3FF12',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
    marginTop: 20,
  },

  continueButtonText: {
    color: '#0B0F2E',
    fontSize: 12,
    fontWeight: '900',
  },

  homeButton: {
    width: '100%',
    height: 48,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: '#343A70',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    marginTop: 10,
  },

  homeButtonText: {
    color: '#A9AEC9',
    fontSize: 11,
    fontWeight: '900',
  },

  confirmationFooter: {
    alignItems: 'center',
    marginTop: 45,
    paddingTop: 25,
    borderTopWidth: 1,
    borderTopColor: '#242850',
    width: '100%',
  },
});