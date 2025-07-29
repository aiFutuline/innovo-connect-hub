import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { User, Settings, Shield, LogOut, Save } from 'lucide-react';
import Navigation from '@/components/Navigation';

const Profile = () => {
  const { user, logout, isAdmin } = useAuth();
  const { toast } = useToast();
  
  // Site settings state
  const [siteSettings, setSiteSettings] = useState({
    siteName: 'InnoPartners',
    siteDescription: 'Connect with innovative partners and collaborate on groundbreaking projects',
    maintenanceMode: false,
    registrationEnabled: true,
    featuredProjectsCount: 6,
    maxParticipants: 100,
    contactEmail: 'info@innopartners.com',
    socialLinks: {
      twitter: 'https://twitter.com/innopartners',
      linkedin: 'https://linkedin.com/company/innopartners',
      github: 'https://github.com/innopartners'
    }
  });

  const [userProfile, setUserProfile] = useState({
    name: user?.name || '',
    email: user?.email || '',
    bio: '',
    company: '',
    location: ''
  });

  const handleSaveSettings = () => {
    toast({
      title: "Settings saved",
      description: "Site settings have been updated successfully",
    });
  };

  const handleSaveProfile = () => {
    toast({
      title: "Profile updated",
      description: "Your profile has been updated successfully",
    });
  };

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">Profile</h1>
              <p className="text-muted-foreground">
                Welcome back, {user?.name}
                {isAdmin && <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">Admin</span>}
              </p>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>

          <Tabs defaultValue="profile" className="space-y-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Settings
              </TabsTrigger>
              {isAdmin && (
                <TabsTrigger value="admin" className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Admin Panel
                </TabsTrigger>
              )}
            </TabsList>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>
                    Update your personal details and profile information.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={userProfile.name}
                        onChange={(e) => setUserProfile({ ...userProfile, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        value={userProfile.email}
                        onChange={(e) => setUserProfile({ ...userProfile, email: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={userProfile.company}
                        onChange={(e) => setUserProfile({ ...userProfile, company: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={userProfile.location}
                        onChange={(e) => setUserProfile({ ...userProfile, location: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell us about yourself..."
                      value={userProfile.bio}
                      onChange={(e) => setUserProfile({ ...userProfile, bio: e.target.value })}
                    />
                  </div>
                  <Button onClick={handleSaveProfile}>
                    <Save className="h-4 w-4 mr-2" />
                    Save Profile
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>
                    Manage your account preferences and security settings.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                  <Button>Update Password</Button>
                </CardContent>
              </Card>
            </TabsContent>

            {isAdmin && (
              <TabsContent value="admin">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Site Configuration</CardTitle>
                      <CardDescription>
                        Manage global site settings and configuration.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="site-name">Site Name</Label>
                          <Input
                            id="site-name"
                            value={siteSettings.siteName}
                            onChange={(e) => setSiteSettings({ ...siteSettings, siteName: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="contact-email">Contact Email</Label>
                          <Input
                            id="contact-email"
                            value={siteSettings.contactEmail}
                            onChange={(e) => setSiteSettings({ ...siteSettings, contactEmail: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="max-participants">Max Participants</Label>
                          <Input
                            id="max-participants"
                            type="number"
                            value={siteSettings.maxParticipants}
                            onChange={(e) => setSiteSettings({ ...siteSettings, maxParticipants: parseInt(e.target.value) })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="featured-count">Featured Projects Count</Label>
                          <Input
                            id="featured-count"
                            type="number"
                            value={siteSettings.featuredProjectsCount}
                            onChange={(e) => setSiteSettings({ ...siteSettings, featuredProjectsCount: parseInt(e.target.value) })}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="site-description">Site Description</Label>
                        <Textarea
                          id="site-description"
                          value={siteSettings.siteDescription}
                          onChange={(e) => setSiteSettings({ ...siteSettings, siteDescription: e.target.value })}
                        />
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="text-sm font-medium">Site Controls</h4>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="maintenance">Maintenance Mode</Label>
                          <Switch
                            id="maintenance"
                            checked={siteSettings.maintenanceMode}
                            onCheckedChange={(checked) => setSiteSettings({ ...siteSettings, maintenanceMode: checked })}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="registration">Registration Enabled</Label>
                          <Switch
                            id="registration"
                            checked={siteSettings.registrationEnabled}
                            onCheckedChange={(checked) => setSiteSettings({ ...siteSettings, registrationEnabled: checked })}
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-sm font-medium">Social Links</h4>
                        <div className="grid grid-cols-1 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="twitter">Twitter</Label>
                            <Input
                              id="twitter"
                              value={siteSettings.socialLinks.twitter}
                              onChange={(e) => setSiteSettings({
                                ...siteSettings,
                                socialLinks: { ...siteSettings.socialLinks, twitter: e.target.value }
                              })}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="linkedin">LinkedIn</Label>
                            <Input
                              id="linkedin"
                              value={siteSettings.socialLinks.linkedin}
                              onChange={(e) => setSiteSettings({
                                ...siteSettings,
                                socialLinks: { ...siteSettings.socialLinks, linkedin: e.target.value }
                              })}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="github">GitHub</Label>
                            <Input
                              id="github"
                              value={siteSettings.socialLinks.github}
                              onChange={(e) => setSiteSettings({
                                ...siteSettings,
                                socialLinks: { ...siteSettings.socialLinks, github: e.target.value }
                              })}
                            />
                          </div>
                        </div>
                      </div>

                      <Button onClick={handleSaveSettings}>
                        <Save className="h-4 w-4 mr-2" />
                        Save Settings
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            )}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;