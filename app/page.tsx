"use client"

import { useState } from "react"
import {
  Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight,
  Search, Mail, Settings, User, Users, CreditCard, LogOut,
  LifeBuoy, UserPlus, MessageSquare, PlusCircle, GitFork,
  Check, ChevronsUpDown, CalendarDays, ChevronRight,
  Terminal, AlertCircle, Loader2, FileX, Plus, Star,
} from "lucide-react"

// UI primitives
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList,
  BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Checkbox } from "@/components/ui/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import {
  ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuLabel,
  ContextMenuSeparator, ContextMenuTrigger,
} from "@/components/ui/context-menu"
import {
  Dialog, DialogContent, DialogDescription, DialogFooter,
  DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer, DrawerClose, DrawerContent, DrawerDescription,
  DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger,
} from "@/components/ui/drawer"
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut,
  DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText } from "@/components/ui/input-group"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from "@/components/ui/item"
import { Kbd } from "@/components/ui/kbd"
import { Label } from "@/components/ui/label"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import {
  Pagination, PaginationContent, PaginationEllipsis, PaginationItem,
  PaginationLink, PaginationNext, PaginationPrevious,
} from "@/components/ui/pagination"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Sheet, SheetClose, SheetContent, SheetDescription,
  SheetFooter, SheetHeader, SheetTitle, SheetTrigger,
} from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Toaster } from "@/components/ui/sonner"
import { Spinner } from "@/components/ui/spinner"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

// --- Chart imports ---
import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"

// ─── helpers ─────────────────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{title}</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {children}
      </div>
    </section>
  )
}

function Tile({ label, children, span }: { label: string; children: React.ReactNode; span?: number }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 rounded-xl border bg-card p-4",
        span === 2 && "sm:col-span-2",
        span === 3 && "sm:col-span-2 lg:col-span-3",
        span === 4 && "sm:col-span-2 lg:col-span-3 xl:col-span-4",
      )}
    >
      <p className="text-xs font-medium text-muted-foreground">{label}</p>
      <div className="flex flex-wrap items-start gap-2">{children}</div>
    </div>
  )
}

// ─── chart data ──────────────────────────────────────────────────────────────

const chartData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73,  mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
]
const chartConfig: ChartConfig = {
  desktop: { label: "Desktop", color: "var(--primary)" },
  mobile:  { label: "Mobile",  color: "var(--muted-foreground)" },
}

const frameworks = [
  { value: "next.js",   label: "Next.js"   },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js",   label: "Nuxt.js"   },
  { value: "remix",     label: "Remix"     },
  { value: "astro",     label: "Astro"     },
]

const scrollTags = Array.from({ length: 20 }, (_, i) => `v1.2.0-beta.${20 - i}`)

// ─── page ─────────────────────────────────────────────────────────────────────

export default function Page() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [comboOpen, setComboOpen] = useState(false)
  const [comboValue, setComboValue] = useState("")

  return (
    <TooltipProvider>
      <Toaster />
      <div className="mx-auto max-w-7xl space-y-10 px-4 py-10">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Component Gallery</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Every Shadcn component from the custom theme preset — all on one page.
          </p>
        </div>

        {/* ── BUTTONS & ACTIONS ─────────────────────────────────────────── */}
        <Section title="Buttons & Actions">
          <Tile label="Button variants">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </Tile>

          <Tile label="Button sizes">
            <Button size="lg">Large</Button>
            <Button>Default</Button>
            <Button size="sm">Small</Button>
            <Button size="icon" variant="outline"><ChevronRight className="h-4 w-4" /></Button>
            <Button disabled><Loader2 className="animate-spin" /> Loading</Button>
          </Tile>

          <Tile label="ButtonGroup">
            <ButtonGroup>
              <Button variant="outline">Cut</Button>
              <Button variant="outline">Copy</Button>
              <Button variant="outline">Paste</Button>
            </ButtonGroup>
            <ButtonGroup>
              <ToggleGroup type="single">
                <ToggleGroupItem value="left"  aria-label="Align left"><AlignLeft  className="h-4 w-4" /></ToggleGroupItem>
                <ToggleGroupItem value="center" aria-label="Align center"><AlignCenter className="h-4 w-4" /></ToggleGroupItem>
                <ToggleGroupItem value="right" aria-label="Align right"><AlignRight className="h-4 w-4" /></ToggleGroupItem>
              </ToggleGroup>
            </ButtonGroup>
          </Tile>

          <Tile label="Toggle">
            <Toggle aria-label="Bold"><Bold className="h-4 w-4" /></Toggle>
            <Toggle aria-label="Italic" variant="outline"><Italic className="h-4 w-4" /></Toggle>
            <Toggle aria-label="Underline"><Underline className="h-4 w-4" /> Underline</Toggle>
          </Tile>
        </Section>

        {/* ── INPUTS ────────────────────────────────────────────────────── */}
        <Section title="Inputs">
          <Tile label="Input">
            <div className="flex w-full flex-col gap-2">
              <Input placeholder="Default input" />
              <Input placeholder="Disabled" disabled />
              <Input type="password" placeholder="Password" />
            </div>
          </Tile>

          <Tile label="Textarea">
            <Textarea placeholder="Type your message here…" className="w-full" />
          </Tile>

          <Tile label="InputGroup">
            <div className="flex w-full flex-col gap-2">
              <InputGroup>
                <InputGroupAddon align="inline-start"><InputGroupText><Search className="h-4 w-4" /></InputGroupText></InputGroupAddon>
                <InputGroupInput placeholder="Search…" />
              </InputGroup>
              <InputGroup>
                <InputGroupAddon align="inline-start"><InputGroupText>https://</InputGroupText></InputGroupAddon>
                <InputGroupInput placeholder="yoursite.com" />
              </InputGroup>
            </div>
          </Tile>

          <Tile label="Select / NativeSelect">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="cherry">Cherry</SelectItem>
              </SelectContent>
            </Select>
            <NativeSelect className="w-full">
              <NativeSelectOption value="">Native select</NativeSelectOption>
              <NativeSelectOption value="a">Option A</NativeSelectOption>
              <NativeSelectOption value="b">Option B</NativeSelectOption>
            </NativeSelect>
          </Tile>

          <Tile label="Checkbox / Switch / Radio">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2"><Checkbox id="c1" defaultChecked /><Label htmlFor="c1">Accept terms</Label></div>
              <div className="flex items-center gap-2"><Switch id="s1" defaultChecked /><Label htmlFor="s1">Airplane mode</Label></div>
              <RadioGroup defaultValue="b" className="flex flex-col gap-1">
                <div className="flex items-center gap-2"><RadioGroupItem value="a" id="r1" /><Label htmlFor="r1">Option A</Label></div>
                <div className="flex items-center gap-2"><RadioGroupItem value="b" id="r2" /><Label htmlFor="r2">Option B</Label></div>
              </RadioGroup>
            </div>
          </Tile>

          <Tile label="Slider">
            <div className="flex w-full flex-col gap-3">
              <Slider defaultValue={[40]} max={100} step={1} />
              <Slider defaultValue={[20, 70]} max={100} step={1} />
            </div>
          </Tile>

          <Tile label="InputOTP">
            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} /><InputOTPSlot index={1} /><InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} /><InputOTPSlot index={4} /><InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </Tile>

          <Tile label="Field">
            <FieldGroup className="w-full">
              <Field>
                <FieldLabel htmlFor="email-g">Email</FieldLabel>
                <Input id="email-g" type="email" placeholder="you@example.com" />
                <FieldDescription>We'll never share your email.</FieldDescription>
              </Field>
            </FieldGroup>
          </Tile>

          <Tile label="Combobox">
            <Popover open={comboOpen} onOpenChange={setComboOpen}>
              <PopoverTrigger asChild>
                <Button variant="outline" role="combobox" aria-expanded={comboOpen} className="w-full justify-between">
                  {comboValue ? frameworks.find(f => f.value === comboValue)?.label : "Select framework…"}
                  <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0">
                <Command>
                  <CommandInput placeholder="Search…" />
                  <CommandList>
                    <CommandEmpty>No results.</CommandEmpty>
                    <CommandGroup>
                      {frameworks.map(f => (
                        <CommandItem key={f.value} value={f.value} onSelect={v => { setComboValue(v === comboValue ? "" : v); setComboOpen(false) }}>
                          <Check className={cn("mr-2 h-4 w-4", comboValue === f.value ? "opacity-100" : "opacity-0")} />
                          {f.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </Tile>

          <Tile label="Calendar">
            <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
          </Tile>
        </Section>

        {/* ── DISPLAY ───────────────────────────────────────────────────── */}
        <Section title="Display">
          <Tile label="Badge">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </Tile>

          <Tile label="Avatar">
            <Avatar><AvatarImage src="https://github.com/shadcn.png" alt="shadcn" /><AvatarFallback>CN</AvatarFallback></Avatar>
            <Avatar className="h-12 w-12"><AvatarFallback>AB</AvatarFallback></Avatar>
            <Avatar className="h-8 w-8"><AvatarFallback className="text-xs">XS</AvatarFallback></Avatar>
          </Tile>

          <Tile label="Alert">
            <div className="flex w-full flex-col gap-2">
              <Alert><Terminal className="h-4 w-4" /><AlertTitle>Heads up!</AlertTitle><AlertDescription>You can add components using the CLI.</AlertDescription></Alert>
              <Alert variant="destructive"><AlertCircle className="h-4 w-4" /><AlertTitle>Error</AlertTitle><AlertDescription>Your session has expired.</AlertDescription></Alert>
            </div>
          </Tile>

          <Tile label="Card">
            <Card className="w-full">
              <CardHeader><CardTitle>Card Title</CardTitle><CardDescription>Card description goes here.</CardDescription></CardHeader>
              <CardContent><p className="text-sm text-muted-foreground">Card content area.</p></CardContent>
              <CardFooter><Button size="sm">Action</Button></CardFooter>
            </Card>
          </Tile>

          <Tile label="Progress & Skeleton">
            <div className="flex w-full flex-col gap-3">
              <Progress value={60} />
              <Progress value={30} />
              <div className="flex items-center gap-3">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="space-y-2"><Skeleton className="h-3 w-32" /><Skeleton className="h-3 w-24" /></div>
              </div>
            </div>
          </Tile>

          <Tile label="Spinner & Kbd">
            <Spinner />
            <Spinner className="h-6 w-6 text-primary" />
            <Spinner className="h-8 w-8" />
            <Kbd>⌘K</Kbd>
            <Kbd>Enter</Kbd>
            <Kbd>Esc</Kbd>
          </Tile>

          <Tile label="Separator">
            <div className="w-full space-y-2">
              <p className="text-sm">Above</p>
              <Separator />
              <p className="text-sm">Below</p>
              <div className="flex h-4 items-center gap-3 text-sm">
                <span>Blog</span><Separator orientation="vertical" /><span>Docs</span><Separator orientation="vertical" /><span>Source</span>
              </div>
            </div>
          </Tile>

          <Tile label="AspectRatio">
            <div className="w-full">
              <AspectRatio ratio={16 / 9} className="rounded-md bg-muted">
                <div className="flex h-full items-center justify-center text-sm text-muted-foreground">16 / 9</div>
              </AspectRatio>
            </div>
          </Tile>

          <Tile label="Table" span={2}>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice</TableHead><TableHead>Status</TableHead><TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[["INV001","Paid","$250.00"],["INV002","Pending","$150.00"],["INV003","Unpaid","$350.00"]].map(([inv,status,amt]) => (
                  <TableRow key={inv}>
                    <TableCell className="font-medium">{inv}</TableCell>
                    <TableCell><Badge variant={status === "Paid" ? "default" : status === "Pending" ? "secondary" : "destructive"}>{status}</Badge></TableCell>
                    <TableCell className="text-right">{amt}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Tile>

          <Tile label="Chart" span={2}>
            <ChartContainer config={chartConfig} className="h-48 w-full">
              <BarChart data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
              </BarChart>
            </ChartContainer>
          </Tile>

          <Tile label="Empty state">
            <Empty className="w-full py-6">
              <EmptyHeader>
                <EmptyMedia variant="icon"><FileX /></EmptyMedia>
                <EmptyTitle>No files found</EmptyTitle>
                <EmptyDescription>Upload a file to get started.</EmptyDescription>
              </EmptyHeader>
              <EmptyContent><Button size="sm"><Plus /> Upload</Button></EmptyContent>
            </Empty>
          </Tile>

          <Tile label="Item list">
            <ItemGroup className="w-full">
              {["Design","Marketing","Engineering"].map(t => (
                <Item key={t} variant="outline">
                  <ItemContent><ItemTitle>{t}</ItemTitle><ItemDescription>Shared workspace</ItemDescription></ItemContent>
                  <ItemActions><Button size="icon" variant="ghost" className="h-8 w-8"><Star className="h-4 w-4" /></Button></ItemActions>
                </Item>
              ))}
            </ItemGroup>
          </Tile>
        </Section>

        {/* ── OVERLAYS ──────────────────────────────────────────────────── */}
        <Section title="Overlays & Popovers">
          <Tile label="Tooltip">
            <Tooltip>
              <TooltipTrigger asChild><Button variant="outline">Hover me</Button></TooltipTrigger>
              <TooltipContent>Add to library</TooltipContent>
            </Tooltip>
          </Tile>

          <Tile label="Popover">
            <Popover>
              <PopoverTrigger asChild><Button variant="outline">Open popover</Button></PopoverTrigger>
              <PopoverContent className="w-64">
                <p className="text-sm">This is a simple popover with some content.</p>
              </PopoverContent>
            </Popover>
          </Tile>

          <Tile label="HoverCard">
            <HoverCard>
              <HoverCardTrigger asChild><Button variant="link">@nextjs</Button></HoverCardTrigger>
              <HoverCardContent className="w-72">
                <div className="flex gap-3">
                  <Avatar><AvatarImage src="https://github.com/vercel.png" /><AvatarFallback>VC</AvatarFallback></Avatar>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold">@nextjs</p>
                    <p className="text-xs text-muted-foreground">The React Framework by @vercel.</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground"><CalendarDays className="h-3 w-3" /> Joined December 2021</div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </Tile>

          <Tile label="Dialog">
            <Dialog>
              <DialogTrigger asChild><Button variant="outline">Open dialog</Button></DialogTrigger>
              <DialogContent>
                <DialogHeader><DialogTitle>Edit profile</DialogTitle><DialogDescription>Make changes here. Click save when done.</DialogDescription></DialogHeader>
                <div className="grid gap-3 py-2">
                  <div className="grid grid-cols-4 items-center gap-3">
                    <Label className="text-right">Name</Label>
                    <Input defaultValue="Pedro Duarte" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter><Button>Save changes</Button></DialogFooter>
              </DialogContent>
            </Dialog>
          </Tile>

          <Tile label="AlertDialog">
            <AlertDialog>
              <AlertDialogTrigger asChild><Button variant="destructive">Delete account</Button></AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader><AlertDialogTitle>Are you sure?</AlertDialogTitle><AlertDialogDescription>This cannot be undone.</AlertDialogDescription></AlertDialogHeader>
                <AlertDialogFooter><AlertDialogCancel>Cancel</AlertDialogCancel><AlertDialogAction>Continue</AlertDialogAction></AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </Tile>

          <Tile label="Sheet">
            <Sheet>
              <SheetTrigger asChild><Button variant="outline">Open sheet</Button></SheetTrigger>
              <SheetContent>
                <SheetHeader><SheetTitle>Edit profile</SheetTitle><SheetDescription>Make changes here.</SheetDescription></SheetHeader>
                <div className="mt-4"><Input defaultValue="Pedro Duarte" /></div>
                <SheetFooter className="mt-4"><SheetClose asChild><Button>Save</Button></SheetClose></SheetFooter>
              </SheetContent>
            </Sheet>
          </Tile>

          <Tile label="Drawer">
            <Drawer>
              <DrawerTrigger asChild><Button variant="outline">Open drawer</Button></DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader><DrawerTitle>Move Goal</DrawerTitle><DrawerDescription>Set your daily activity goal.</DrawerDescription></DrawerHeader>
                  <DrawerFooter><Button>Submit</Button><DrawerClose asChild><Button variant="outline">Cancel</Button></DrawerClose></DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </Tile>

          <Tile label="Sonner (toast)">
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" onClick={() => toast("Event created")}>Default</Button>
              <Button variant="outline" onClick={() => toast.success("Saved!")}>Success</Button>
              <Button variant="outline" onClick={() => toast.error("Failed!")}>Error</Button>
            </div>
          </Tile>
        </Section>

        {/* ── MENUS ─────────────────────────────────────────────────────── */}
        <Section title="Menus">
          <Tile label="DropdownMenu">
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild><Button variant="outline">Open menu</Button></DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem><User /> Profile <DropdownMenuShortcut>⌘P</DropdownMenuShortcut></DropdownMenuItem>
                  <DropdownMenuItem><Settings /> Settings <DropdownMenuShortcut>⌘S</DropdownMenuShortcut></DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger><UserPlus /> Invite users</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem><Mail /> Email</DropdownMenuItem>
                    <DropdownMenuItem><MessageSquare /> Message</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem><LogOut /> Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Tile>

          <Tile label="ContextMenu">
            <ContextMenu>
              <ContextMenuTrigger className="flex h-20 w-full items-center justify-center rounded-md border border-dashed text-sm">Right-click here</ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuLabel>Actions</ContextMenuLabel>
                <ContextMenuSeparator />
                <ContextMenuItem>Edit</ContextMenuItem>
                <ContextMenuItem>Duplicate</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem className="text-destructive">Delete</ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </Tile>

          <Tile label="Command">
            <Command className="w-full rounded-lg border">
              <CommandInput placeholder="Search…" />
              <CommandList>
                <CommandEmpty>No results.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem><User /> Profile</CommandItem>
                  <CommandItem><Settings /> Settings</CommandItem>
                  <CommandItem><Mail /> Messages</CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </Tile>
        </Section>

        {/* ── NAVIGATION ────────────────────────────────────────────────── */}
        <Section title="Navigation">
          <Tile label="Breadcrumb" span={2}>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem><BreadcrumbLink href="#">Components</BreadcrumbLink></BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem><BreadcrumbPage>Breadcrumb</BreadcrumbPage></BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </Tile>

          <Tile label="Pagination" span={2}>
            <Pagination>
              <PaginationContent>
                <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
                <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
                <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
                <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                <PaginationItem><PaginationEllipsis /></PaginationItem>
                <PaginationItem><PaginationNext href="#" /></PaginationItem>
              </PaginationContent>
            </Pagination>
          </Tile>

          <Tile label="Tabs" span={2}>
            <Tabs defaultValue="account" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account" className="mt-2">
                <Card><CardContent className="pt-4"><Input placeholder="Display name" /></CardContent></Card>
              </TabsContent>
              <TabsContent value="password" className="mt-2">
                <Card><CardContent className="pt-4"><Input type="password" placeholder="New password" /></CardContent></Card>
              </TabsContent>
            </Tabs>
          </Tile>
        </Section>

        {/* ── LAYOUT ────────────────────────────────────────────────────── */}
        <Section title="Layout & Disclosure">
          <Tile label="Accordion" span={2}>
            <Accordion type="single" collapsible className="w-full">
              {[["item-1","Is it accessible?","Yes — it follows WAI-ARIA."],["item-2","Is it styled?","Yes — matches the design system."],["item-3","Is it animated?","Yes — smooth open/close transitions."]].map(([v,t,c]) => (
                <AccordionItem key={v} value={v}>
                  <AccordionTrigger>{t}</AccordionTrigger>
                  <AccordionContent>{c}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Tile>

          <Tile label="Collapsible">
            <Collapsible className="w-full space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Starred repos</p>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm"><ChevronRight className="h-4 w-4" /></Button>
                </CollapsibleTrigger>
              </div>
              <div className="rounded border px-3 py-2 font-mono text-xs">@radix-ui/primitives</div>
              <CollapsibleContent className="space-y-2">
                <div className="rounded border px-3 py-2 font-mono text-xs">@radix-ui/colors</div>
                <div className="rounded border px-3 py-2 font-mono text-xs">@stitches/react</div>
              </CollapsibleContent>
            </Collapsible>
          </Tile>

          <Tile label="ScrollArea">
            <ScrollArea className="h-48 w-full rounded-md border">
              <div className="p-4">
                {scrollTags.map(t => (
                  <div key={t} className="py-1 text-sm">{t}</div>
                ))}
              </div>
            </ScrollArea>
          </Tile>

          <Tile label="Resizable" span={2}>
            <ResizablePanelGroup orientation="horizontal" className="h-32 w-full rounded-lg border">
              <ResizablePanel defaultSize={50}><div className="flex h-full items-center justify-center text-sm">Panel A</div></ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={50}><div className="flex h-full items-center justify-center text-sm">Panel B</div></ResizablePanel>
            </ResizablePanelGroup>
          </Tile>

          <Tile label="Carousel" span={2}>
            <Carousel className="w-full max-w-sm mx-auto">
              <CarouselContent>
                {[1,2,3,4,5].map(i => (
                  <CarouselItem key={i}>
                    <Card><CardContent className="flex aspect-square items-center justify-center p-6"><span className="text-4xl font-semibold">{i}</span></CardContent></Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </Tile>

          <Tile label="AspectRatio (3 ratios)">
            <div className="flex w-full flex-col gap-2">
              {([[16,9],[4,3],[1,1]] as [number,number][]).map(([w,h]) => (
                <AspectRatio key={`${w}/${h}`} ratio={w/h} className="rounded bg-muted">
                  <div className="flex h-full items-center justify-center text-xs text-muted-foreground">{w} / {h}</div>
                </AspectRatio>
              ))}
            </div>
          </Tile>
        </Section>
      </div>
    </TooltipProvider>
  )
}
